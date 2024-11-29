import React, { useState } from "react";

type Folder = {
  name: string;
  folders?: Folder[]
};

type IconProps = React.HTMLAttributes<SVGElement>;

const folders: Folder[] = [
  {
    name: "Dashboard",
    folders: [
      {
        name: 'Movies',
        folders: [
          {
            name: "Action",
            folders: [
              {
                name: "2000s", folders: [
                  { name: "Gladiator.mp4" },
                  { name: "Americana.mp4" },
                ]
              },
              { name: "2010s", folders: [] },
            ]
          },
          { name: "Comedy", folders: [] },
        ]
      },
      {
        name: 'Music',
        folders: [
          { name: 'Rock', folders: [] },
          { name: 'Classical', folders: [] }
        ]
      },
      { name: 'Pictures', folders: [] },
      { name: 'Documents', folders: [] },
      {
        name: "passwords.txt"
      }
    ]
  }
];

function App() {
  return (
    <div className="mx-auto p-8">
      <ul>
        {folders.map(folder => <FileSystemItem key={folder.name} folder={folder} />)}
      </ul>
    </div>
  )
}

function FileSystemItem({ folder }: { folder: Folder }) {
  const [show, setShow] = useState(false);

  return (
    <li key={folder.name}>
      <span className="flex items-center gap-2 mb-2">
        {folder.folders ? <Icons.folder /> : <Icons.file />}

        <span className="text-xl font-semibold">
          {folder.name}
        </span>

        {folder.folders
          && folder.folders.length > 0
          && (
            <button onClick={() => setShow(!show)}>
              <Icons.right className={`h-5 w-5 ${show ? 'rotate-90' : 'rotate-0'}`} />
            </button>
          )}
      </span>

      {show && (<ul className="pl-6">
        {folder.folders?.map(folder => <FileSystemItem folder={folder} key={folder.name} />)}
      </ul>)}
    </li>
  )
}

const Icons = {
  folder: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
    </svg>
  ),
  file: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#606060"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  ),
  right: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

export default App;
