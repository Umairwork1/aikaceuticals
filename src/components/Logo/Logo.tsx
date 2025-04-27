import logo from '../../assets/logo.jpeg';

export default function Logo({ width = '100px', height = '100px' }) {
  return <img width={width} height={height} src={logo} />;
}
