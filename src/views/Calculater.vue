<template>
    <router-link to="/" class="router-links">Home</router-link>
    <section class="body">
        <section class="main">
            <div class="screen" id="screen">
                <h3 v-if="!result && !previousNumber">0</h3>
                <h3>{{result}}</h3>
                <h3 v-if="selectedOperator && !answer">{{selectedOperator}}</h3>
                <h3 v-if="previousNumber && !answer">{{previousNumber}}</h3>
            </div>
            <div class="buttons"> 
                <button class="number" @click ="inputNumber('1')">1</button>
                <button class="number" @click ="inputNumber('2')">2</button>
                <button class="number" @click ="inputNumber('3')">3</button>
                <button class="number" @click ="inputNumber('4')">4</button>
                <button class="number" @click ="inputNumber('5')">5</button>
                <button class="number" @click ="inputNumber('6')">6</button>
                <button class="number" @click ="inputNumber('7')">7</button>
                <button class="number" @click ="inputNumber('8')">8</button>
                <button class="number" @click ="inputNumber('9')">9</button>
                <button class="number" @click ="inputNumber('0')">0</button>
                <button class="number" @click ="inputNumber('.')">.</button>
                <button class="operator" @click ="inputOperator('-')">-</button>
                <button class="operator" @click ="inputOperator('+')">+</button>
                <button class="operator" @click ="inputOperator('*')">*</button>
                <button class="operator" @click ="inputOperator('/')">/</button>
                <button class="equal" @click ="calculate(this.selectedOperator)">=</button>
                <button class="clear" @click="clear()">C</button>
                <button class="clear-all" @click="clearAll()">CA</button>
            </div>
        </section>
    </section>
</template>
<script>
export default{
    data(){
        return{
            previousNumber:'',
            result: '',
            selectedOperator:'',
            answer: false
        }
    },
    methods:{
        inputNumber(number) {                                                                
            if(this.reslut === ''){
                this.reslut = number
                return;
            }
            if(this.result ==='0' && number !==('.')){
                this.result = number 
                return;
            }
            if(number === '.' && this.result.includes('.')){
                return;
            }
            else{
                this.result = this.result + number
                console.log(this.result)
            }
        },
        calculate(selectedOperator){
            if(this.result === '' ){
                return;
            }
            switch(selectedOperator){
                case '+':
                    this.result = (parseFloat(this.previousNumber) + parseFloat(this.result)).toString();
                    break;
                case '-':
                    this.result = (parseFloat(this.previousNumber) - parseFloat(this.result)).toString();
                    break;
                case '*':
                    this.result = (parseFloat(this.previousNumber) * parseFloat(this.result)).toString();
                    break;
                case '/':
                    this.result = (parseFloat(this.previousNumber) / parseFloat(this.result)).toString();
                    break;
            }
            this.answer = true
            this.selectedOperator = ''
        },
        inputOperator(operator) {
            if(this.result ==='' && this.previousNumber === ''){
                return;
            }
            if(this.selectedOperator && this.result ===''){
                this.selectedOperator = operator
            }
            else if (this.selectedOperator === ''){
                this.previousNumber = this.result
                this.result = ''
                this.selectedOperator = operator
            }
            else {
                this.calculate(this.selectedOperator)
                this.previousNumber = this.result
                this.result = ''
                this.selectedOperator = operator
            }
            this.answer = false
        },
        clear(){
            if(this.result){
                this.result = this.result.slice(0, -1);
                return;
            }
            if(this.selectedOperator){
                this.selectedOperator = ''
                this.result = this.previousNumber
                this.previousNumber = ''
            }
        },
        clearAll(){
            this.result = ''
            this.previousNumber = ''
            this.selectedOperator = ''
        }
    }
}
//baad mosavi meqdar previus result taqir nmikone va operator run mishe khod b khod
</script>
<style scoped>
    .body{
        height: 95vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .main{
        background: grey;
        width: 40vw;
        max-width: 400px;
        height: 65vh;
        display: flex;
        flex-flow: wrap;
        justify-content: center;
    }
    .screen{
        padding-left: 10px;
        width: 100%;
        height:calc(100% / 5);
        background: rgb(10, 94, 150);
        display: flex;
        flex-direction: column;
    }
    h3{
        color: white;
        font-size: 20px;
        margin: 0;
        padding: 0;
    }
    .buttons{
        height:calc(600% / 7);
        width: 100%;
        display: flex;
        flex-flow: row wrap;
    }
    button{
        width: calc(100% / 3);
        height: calc(100% / 6);
        border-radius: 0px;
        cursor: pointer;
    }
    button:active{
        transform: scale(90%);
    }
    .router-links{
        color: crimson;
        text-align: center;
        padding: 20px;
        font-size: 20px;
}
</style>