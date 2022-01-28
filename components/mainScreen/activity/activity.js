import Login from './login';
import Order from './order';
import Launch from './launch';
import GraphContainer from '../../commonFunction/template/graphContainer';
const activity = () => {
  // return <GraphContainer graph={<Login />} />;
  // return <GraphContainer graph={<Launch />} />;
  return <GraphContainer graph={<Order />} />;
};

export default activity;
