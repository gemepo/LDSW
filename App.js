import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
        cliente:'',
        origen:'',
        destino:'',
        tarifa:'',
        convenio: '',
        tipo:'',
        kilometros:'',
        ruta:'',
        status: false
      })
    this.procesar = this.procesar.bind(this);
    this.cambioCliente = this.cambioCliente.bind(this);
    this.cambioOrigen = this.cambioOrigen.bind(this);    
    this.cambioDestino = this.cambioDestino.bind(this);
    this.cambioTarifa = this.cambioTarifa.bind(this);
    this.cambioConvenio = this.cambioConvenio.bind(this);
    this.cambioTipo = this.cambioTipo.bind(this);
    this.cambioKilometros = this.cambioKilometros.bind(this);
    this.cambioRuta = this.cambioRuta.bind(this);
    this.cambioStatus = this.cambioStatus.bind(this);

  }


  render() {
    return (
      <div>
        <form onSubmit={this.procesar}>
          <p>Cliente:<input type="text" value={this.state.cliente} onChange={this.cambioCliente } /></p>
          <p>Origen:<input type="text" value={this.state.origen} onChange={this.cambioOrigen} /></p>
          <p>Destino:<input type="text" value={this.state.destino} onChange={this.cambioDestino }/></p>
          <p>Tarifa:<input type="number" value={this.state.tarifa} onChange={this.cambioTarifa} /></p>
          <p>Convenio:<input type="text" value={this.state.convenio} onChange={this.cambioConvenio} /></p>
          <p>Tipo:<input type="text" value={this.state.tipo} onChange={this.cambioTipo }/></p>
          <p>Kilometros:<input type="number" value={this.state.kilometros} onChange={this.cambioKilometros} /></p>
          <p>Ruta:<input type="number" value={this.state.ruta} onChange={this.cambioRuta} /></p>
          <p>Estatus:<input type="checkbox" value={this.state.status} onChange={this.cambioStatus} /></p>          
          <p> <input type="submit" /></p>
        </form>
        <hr />
        <h3>Datos Ingresados</h3>
        <p>Cliente:{this.state.cliente}</p>
        <p>Origen:{this.state.origen}</p>
        <p>Destino:{this.state.destino}</p>
        <p>Tarifa:{this.state.tarifa}</p>
        <p>Convenio:{this.state.convenio}</p>
        <p>Tipo:{this.state.tipo}</p>
        <p>Kilometros:{this.state.convenio}</p>
        <p>Ruta:{this.state.ruta}</p>

        <p>Estatus:{this.state.status ? 'Inactivo':'Activo'} </p>        
      </div>
    );
  }

  procesar(e) {
    e.preventDefault();
    alert('Dato cargado '      +this.state.cliente + '' +
                               +this.state.origen + ' ' + 
                               +this.state.destino + ' ' + 
                               +this.state.tarifa + ' ' +
                               +this.state.convenio + ' ' +
                               +this.state.tipo + ' ' +
                               +this.state.kilometros + ' ' +
                               +this.state.ruta + ' ' +
                               +this.state.estatus);
  }

  cambioCliente(e) {
    this.setState( {
      cliente: e.target.value
    })
  }

  cambioOrigen(e) {
    this.setState( {
      origen: e.target.value
    })
  }  
  cambioDestino(e) {
    this.setState( {
      destino: e.target.value
    })
  
}  
cambioTarifa(e)  {
  this.setState( {
    tarifa: e.target.value
  })
}  
cambioConvenio(e)  {
  this.setState( {
    convenio: e.target.value
  })
}
cambioTipo(e)  {
  this.setState( {
    tipo: e.target.value
  })
}  
cambioKilometros(e)  {
  this.setState( {
    kilometros: e.target.value
  })
}  
cambioRuta(e)  {
  this.setState( {
    ruta: e.target.value
  })
}
 cambioStatus(e) {
    this.setState( {
      status: !this.state.status
    })
  }    
}

export default App;