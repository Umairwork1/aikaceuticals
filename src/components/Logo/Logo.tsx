import logo from '../../assets/logo.png';

export default function Logo({ width = '100px', height = '100px' }) {
  return <img width={width} height={height} src={logo} />;
}
