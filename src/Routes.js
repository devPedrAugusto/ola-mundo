import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from 'paginas/Inicio';
import SobreMim from 'paginas/SobreMim';
import NaoEncontrada from 'paginas/NaoEncontrada';
import Menu from 'componentes/Menu';
import Rodape from 'componentes/Rodape';
import PaginaPadrao from 'componentes/PaginaPadrao';
import Posts from 'paginas/Posts';


function AppRoutes() {

  return (
    <BrowserRouter>
      <Menu />
      <Routes>
      
        <Route path='/' element={<PaginaPadrao/>}>
          <Route index Component={Inicio} />
          <Route path='sobremim' Component={SobreMim} />
        </Route>
        
        <Route path='posts/:id/*' Component={Posts}/>
        <Route path='*' Component={NaoEncontrada} />
      
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
