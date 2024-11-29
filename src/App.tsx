import { useEffect, useRef, useState } from "react";
import Sidebar from './Sidebar'

function App() {
  const leftPane = useRef<HTMLDivElement>(null);
  const rightPane = useRef<HTMLDivElement>(null);
  const [isDragging, setDragging] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;

      const newLeftWidth = e.clientX / window.innerWidth * 100;

      if (newLeftWidth > 10 && newLeftWidth < 90 && leftPane.current) {
        leftPane.current.style.flexBasis = `${newLeftWidth}%`;
      }
    }

    const handleMouseUp = () => {
      if (isDragging) {
        setDragging(false);
        document.body.style.cursor = 'default';
      }
    }

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }
  }, [isDragging])

  return (
    <div className="h-screen flex overflow-hidden">
      <div id="leftPane" ref={leftPane} className="h-full basis-1/4 bg-gray-100">
        <Sidebar />
      </div>
      <div
        id="divider"
        onMouseDown={() => {
          setDragging(true);
          document.body.style.cursor = 'ew-resize';
        }}
        className="w-[2px] cursor-ew-resize bg-gray-600"></div>
      <div id="rightPane" ref={rightPane} className="h-full flex-grow">
        {/* <Comments /> */}
      </div>
    </div>
  )
}

export default App;
