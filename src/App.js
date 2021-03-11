import './App.css';
import { Face } from './components/Face'
import { range } from 'd3'

const width = 160;
const height = 160;

const array = range( 3 * 3 );

const App = () => array.map(() => (
    <Face
    width={width}
    height={height}
    centerX = {width / 2}
    centerY = {height / 2}
    strokeWidth = {10}
    eyeOffsetX = {30}
    eyeOffsetY = {30}
    eyeRadius = {10 + Math.random() * 10}
    mouthWidth = {10 + Math.random() * 5}
    mouthRadius = {40 + Math.random() * 10}
    />
  )
);

export default App;
