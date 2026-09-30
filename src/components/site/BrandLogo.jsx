export default function BrandLogo({ className = '' }) {
  return (
    <img
      src="/brand/gms-logo-horizontal-transparent.png"
      alt="Golden Marketing Services"
      width="2172"
      height="724"
      className={`block shrink-0 object-contain ${className}`}
      draggable="false"
    />
  );
}
