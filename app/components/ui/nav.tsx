export default function Nav() {
  return (
    <div className="absolute top-0 left-0 flex justify-between items-center p-3 w-full h-full max-h-16">
      <div>
        <p>김준현 개발자 포트폴리오</p>
      </div>
      <div className="flex gap-6 max-sm:text-xs">
        <a>About</a>
        <a>Works</a>
        <a>Contact</a>
      </div>
    </div>
  );
}
