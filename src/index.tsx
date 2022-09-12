import ReactDOM from 'react-dom/client';
import App from './App';
import {createServer, Model} from 'miragejs'


createServer({

  models:{
    transaction:Model,
  },

  seeds(server){
    server.db.loadData({
      transactions:[
        {
          id:1,
          title:'Freelancer',
          type:'deposit',
          category:'Dev',
          amount:6000,
          createdAt:new Date('2022-01-01')
        },
        {
          id:2,
          title:'Aluguel',
          type:'withdraw',
          category:'Dev',
          amount:6000,
          createdAt:new Date('2022-01-01')
        }
      ]
    })
  }
,
  routes(){
    this.namespace='api';

    this.get('/transactions', ()=>{
      return this.schema.all('transaction')
    })
      
    this.post('transactions',(schema,request)=>{
      const data=JSON.parse(request.requestBody)

      return schema.create('transaction',data)
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);


