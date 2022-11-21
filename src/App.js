import harvardArt from './data/harvardArt';
import GalleryNavigation from './components/GalleryNavigation/GalleryNavigation';
import GalleryView from './components/GalleryView/GalleryView';
import { useParams, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Hello from App</h1>{' '}
      <GalleryNavigation galleries={harvardArt.records} />
      <Switch>
        <Route path={'/galleries/:galleryId'}>
          <GalleryView galleries={harvardArt.records} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
