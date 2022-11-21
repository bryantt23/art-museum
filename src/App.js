import harvardArt from './data/harvardArt';
import GalleryNavigation from './components/GalleryNavigation/GalleryNavigation';
import GalleryView from './components/GalleryView/GalleryView';
import ArtDescription from './components/ArtDescription/ArtDescription';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Hello from App</h1>{' '}
      <GalleryNavigation galleries={harvardArt.records} />
      <Switch>
        <Route exact path='/'>
          <div>
            <h2>Harvard Art Museum</h2>
            <p>
              Look, but Don't Touch. Please select a Gallery in the navigation
              bar. Please select a Gallery in the navigation bar.
            </p>
          </div>
        </Route>
        <Route path={`/galleries/:galleryId/art/:artId`}>
          <ArtDescription galleries={harvardArt.records} />
        </Route>
        <Route path={'/galleries/:galleryId'}>
          <GalleryView galleries={harvardArt.records} />
        </Route>
        <Route>
          <div>Page Not Found</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
