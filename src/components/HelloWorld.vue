<template>
    <div class="hello">
        <v-ons-page>
            <v-ons-toolbar>
                <div class="center">Action Sheet</div>
            </v-ons-toolbar>

            <v-ons-button @click="$ons.openActionSheet({buttons:['label1', 'label2', 'label3'], title: 'Lorem ipsum', cancelable: true, destructive: 1})">
                Dynamic action sheet
            </v-ons-button>

            <v-ons-button @click="actionSheetVisible = true">
                 Static action sheet
            </v-ons-button>
            <div>Static sheet visible? {{actionSheetVisible}}</div>

            <v-ons-action-sheet
                :visible.sync="actionSheetVisible"
                cancelable
                title="Description"
            >
                <v-ons-action-sheet-button icon="md-square-o">Label 1</v-ons-action-sheet-button>
                <v-ons-action-sheet-button icon="md-square-o" modifier="destructive">Label 2</v-ons-action-sheet-button>
                <v-ons-action-sheet-button icon="md-square-o">Label 3</v-ons-action-sheet-button>
            </v-ons-action-sheet>

        </v-ons-page>
  </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    data () {
        return {
            actionSheetVisible: false
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>
