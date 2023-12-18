import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Anket from "./components/Pages/Anket";
import Res from "./components/Pages/Res";
import { Route, Routes } from "react-router-dom"

class App extends React.Component {

  constructor(props){ /* Конструкторы как в плюсах */
    super(props) /* Супер вызывает род класс, а пропсы это входыне данные компонента React */
    this.state={
      order: [],
      items: [
        {
          id: 1,
          title: 'Стул серый',
          img: 'example.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicin',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Стол',
          img: 'example.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
          category: 'tables',
          price: '149.00'
        },
        {
          id: 3,
          title: 'Диван',
          img: 'example.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'sofa',
          price: '549.99'
        },
        {
          id: 4,
          title: 'Табуретка',
          img: 'example.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'sofa',
          price: '749.99'
        }
      ]
    }
    this.addToOrder=this.addToOrder.bind(this) /* Разрешить использование с состояниями */
  }
  
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Items items={this.state.items} onAdd={this.addToOrder} />} />
            <Route path="/Res" element={<Res />} />
            <Route path="/Anket" element={<Anket />} />
          </Routes>
        </div>
        
        <Footer />
      </div>
    );
  }

  addToOrder(item) {
      this.setState({order: [...this.state.orders, item]})
  }
}

export default App;
