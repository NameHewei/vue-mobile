<template>
    <div>
        <canvas id="canvas" width="300" height="300" style="border:solid black 1px;">
            Your browser does not support canvas element.
        </canvas>
        <br>
        <button @click="startup">Initialize</button>
        <br>
        Log: <pre id="log" style="border: 1px solid #ccc;"></pre>
    </div>
</template>

<script>
export default {
    data () {
        return {
            ongoingTouches: []
        }
    },
    methods: {
        startup () {
            let el = document.getElementsByTagName('canvas')[0]
            el.addEventListener('touchstart', this.handleStart, false)
            el.addEventListener('touchend', this.handleEnd, false)
            el.addEventListener('touchcancel', this.handleCancel, false)
            el.addEventListener('touchmove', this.handleMove, false)
            console.log('initialized')
        },

        handleStart (evt) {
            evt.preventDefault()
            console.log('touchstart.')
            var el = document.getElementsByTagName('canvas')[0]
            var ctx = el.getContext('2d')
            var touches = evt.changedTouches

            for (var i = 0; i < touches.length; i++) {
                console.log('touchstart:' + i + '...')
                this.ongoingTouches.push(this.copyTouch(touches[i]))
                var color = this.colorForTouch(touches[i])
                ctx.beginPath()
                ctx.arc(touches[i].pageX, touches[i].pageY, 4, 0, 2 * Math.PI, false) // a circle at the start
                ctx.fillStyle = color
                ctx.fill()
                console.log('touchstart:' + i + '.')
            }
        },

        handleMove (evt) {
            evt.preventDefault()
            var el = document.getElementsByTagName('canvas')[0]
            var ctx = el.getContext('2d')
            var touches = evt.changedTouches

            for (var i = 0; i < touches.length; i++) {
                var color = this.colorForTouch(touches[i])
                var idx = this.ongoingTouchIndexById(touches[i].identifier)

                if (idx >= 0) {
                    console.log('continuing touch ' + idx)
                    ctx.beginPath()
                    console.log('ctx.moveTo(' + this.ongoingTouches[idx].pageX + ', ' + this.ongoingTouches[idx].pageY + ');')
                    ctx.moveTo(this.ongoingTouches[idx].pageX, this.ongoingTouches[idx].pageY)
                    console.log('ctx.lineTo(' + touches[i].pageX + ', ' + touches[i].pageY + ');')
                    ctx.lineTo(touches[i].pageX, touches[i].pageY)
                    ctx.lineWidth = 4
                    ctx.strokeStyle = color
                    ctx.stroke()

                    this.ongoingTouches.splice(idx, 1, this.copyTouch(touches[i])) // swap in the new touch record
                    console.log('.')
                } else {
                    console.log("can't figure out which touch to continue")
                }
            }
        },

        handleCancel (evt) {
            evt.preventDefault()
            console.log('touchcancel.')
            var touches = evt.changedTouches

            for (var i = 0; i < touches.length; i++) {
                var idx = this.ongoingTouchIndexById(touches[i].identifier)
                this.ongoingTouches.splice(idx, 1) // remove it; we're done
            }
        },

        handleEnd (evt) {
            evt.preventDefault()
            console.log('touchend')
            var el = document.getElementsByTagName('canvas')[0]
            var ctx = el.getContext('2d')
            var touches = evt.changedTouches

            for (var i = 0; i < touches.length; i++) {
                var color = this.colorForTouch(touches[i])
                var idx = this.ongoingTouchIndexById(touches[i].identifier)

                if (idx >= 0) {
                    ctx.lineWidth = 4
                    ctx.fillStyle = color
                    ctx.beginPath()
                    ctx.moveTo(this.ongoingTouches[idx].pageX, this.ongoingTouches[idx].pageY)
                    ctx.lineTo(touches[i].pageX, touches[i].pageY)
                    ctx.fillRect(touches[i].pageX - 4, touches[i].pageY - 4, 8, 8) // and a square at the end
                    this.ongoingTouches.splice(idx, 1) // remove it; we're done
                } else {
                    console.log("can't figure out which touch to end")
                }
            }
        },

        colorForTouch (touch) {
            var r = touch.identifier % 16
            var g = Math.floor(touch.identifier / 3) % 16
            var b = Math.floor(touch.identifier / 7) % 16
            r = r.toString(16) // make it a hex digit
            g = g.toString(16) // make it a hex digit
            b = b.toString(16) // make it a hex digit
            var color = '#' + r + g + b
            console.log('color for touch with identifier ' + touch.identifier + ' = ' + color)
            return color
        },

        ongoingTouchIndexById (idToFind) {
            for (var i = 0; i < this.ongoingTouches.length; i++) {
                var id = this.ongoingTouches[i].identifier

                if (id === idToFind) {
                    return i
                }
            }
            return -1 // not found
        },

        copyTouch (touch) {
            return { identifier: touch.identifier, pageX: touch.pageX, pageY: touch.pageY }
        }
    }
}
</script>

<style scoped>

</style>
