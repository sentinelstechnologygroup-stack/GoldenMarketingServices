export default function BrandLogo({ className = '' }) {
  return (
    <img
      src="/brand/gms-logo-horizontal-dark.png"
      alt="Golden Marketing Services"
      width="1600"
      height="500"
      className={`block shrink-0 object-contain ${className}`}
      draggable="false"
    />
  );
}
