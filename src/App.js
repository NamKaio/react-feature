import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './components/Persons/Person';
import Sanpham from './components/Sanpham/Sanpham';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// class App extends Component {
//   render(){
//     return (
//       <div className="App">
//         <h1>My first React App</h1>
//         <p>By myself</p>
//         <img src={logo} className="App-logo" alt="logo" />
//         <Person hoten="Luong Hao Nam" tuoi="20">
//           Favorite: lady
//         </Person>
//       </div>
//     )
//   }
// }

// class App extends Component {
//   render(){
//     return (
//       <div className="App">
//         <h1>Shop</h1>
//         <img src={logo} className="App-logo" alt="logo" />
//         <Sanpham masanpham="1" tensanpham="Máy cạo râu" gia="299.000">
//           Sản phẩm cho phái mạnh
//         </Sanpham>
//         <Sanpham masanpham="2" tensanpham="Máy lọc không khí" gia="2.499.000">
//           Sản phẩm cho gia đình
//         </Sanpham>
//         <Sanpham masanpham="3" tensanpham="Máy tạo bọt" gia="149.000">
//           Sản phẩm cho gia đình
//         </Sanpham>
//         <Sanpham masanpham="4" tensanpham="Máy hút bụi" gia="639.000">
//           Sản phẩm cho gia đình
//         </Sanpham>
//         <Sanpham masanpham="5" tensanpham="Tai nghe bluetooth" gia="619.000">
//           Sản phẩm cho phái mạnh
//         </Sanpham>
//       </div>
//     )
//   }
// }

class App extends Component {
  state = {
    sanpham : [
      { masanpham: "1", tensanpham: "Máy cạo râu", gia: "299.000", mota: "Sản phẩm cho phái mạnh" },
      { masanpham: "2", tensanpham: "Máy lọc không khí", gia: "2.499.000", mota: "Sản phẩm cho gia đình" },
      { masanpham: "3", tensanpham: "Máy tạo bọt", gia: "149.000", mota: "Sản phẩm cho gia đình" },
      { masanpham: "4", tensanpham: "Máy hút bụi", gia: "639.000", mota: "Sản phẩm cho gia đình" },
      { masanpham: "5", tensanpham: "Tai nghe bluetooth", gia: "619.000", mota: "Sản phẩm cho phái mạnh"}
    ]
  }

  render(){
    return (
      <div className="App">
        <h1>Shop</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <Sanpham masanpham={this.state.sanpham[0].masanpham}
                 tensanpham={this.state.sanpham[0].tensanpham}
                 gia={this.state.sanpham[0].gia}
                 mota={this.state.sanpham[0].mota}>
        </Sanpham>
        <Sanpham masanpham={this.state.sanpham[1].masanpham}
                 tensanpham={this.state.sanpham[1].tensanpham}
                 gia={this.state.sanpham[1].gia}
                 mota={this.state.sanpham[1].mota}>
        </Sanpham>
        <Sanpham masanpham={this.state.sanpham[2].masanpham}
                 tensanpham={this.state.sanpham[2].tensanpham}
                 gia={this.state.sanpham[2].gia}
                 mota={this.state.sanpham[2].mota}>
        </Sanpham>
        <Sanpham masanpham={this.state.sanpham[3].masanpham}
                 tensanpham={this.state.sanpham[3].tensanpham}
                 gia={this.state.sanpham[3].gia}
                 mota={this.state.sanpham[3].mota}>
        </Sanpham>
        <Sanpham masanpham={this.state.sanpham[4].masanpham}
                 tensanpham={this.state.sanpham[4].tensanpham}
                 gia={this.state.sanpham[4].gia}
                 mota={this.state.sanpham[4].mota}>
        </Sanpham>
      </div>
    )
  }
}

export default App;
