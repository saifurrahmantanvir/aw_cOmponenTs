import { useState } from "react";

type Comment = {
  name: string;
  avatar: string;
  comment: string;
  replies: Comment[]
}

const comments = [
  {
    name: "Saifur rahman",
    avatar: "/prOFiLe.png",
    comment: "This is a test comment! Lorem ipsum dolor sit amet, consectetur adipisicing elit! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil est tempora sunt voluptate, quaerat,",
    replies: [
      {
        name: "Tanvir.",
        avatar: "/proFiLe_T.png",
        comment: "This is a test comment! Lorem ipsum dolor sit amet, consectetur adipisicing elit!",
        replies: [
          {
            name: "Alexis.",
            avatar: "/prOFiLe.png",
            comment: "This is a test comment! Lorem ipsum dolor sit amet, consectetur adipisicing elit! Voluptas magnam atque corporis neque vero labore rerum.",
            replies: [
              {
                name: "Alexis.",
                avatar: "/proFiLe_Te.png",
                comment: "This is a test comment! Lorem ipsum dolor sit amet, consectetur adipisicing elit! Voluptas magnam atque corporis neque vero labore rerum.",
                replies: []
              },
            ]
          },
        ]
      },
    ]
  },
  {
    name: "Tanvir.",
    avatar: "/proFiLe_T.png",
    comment: "This is a test comment! Lorem ipsum dolor sit amet, consectetur adipisicing elit! Vero esse explicabo molestiae sequi quo atque quae.",
    replies: []
  },
  {
    name: "Alexis.",
    avatar: "/prOFiLe.png",
    comment: "This is a test comment! Lorem ipsum dolor sit amet, consectetur adipisicing elit! Voluptas magnam atque corporis neque vero labore rerum.",
    replies: [
      {
        name: "Saifur rahman",
        avatar: "/prOFiLe.png",
        comment: "This is a test comment! Lorem ipsum dolor sit amet, consectetur adipisicing elit! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil est tempora sunt voluptate, quaerat,",
        replies: [
          {
            name: "Tanvir.",
            avatar: "/proFiLe_T.png",
            comment: "This is a test comment! Lorem ipsum dolor sit amet, consectetur adipisicing elit!",
            replies: [
              {
                name: "Alexis.",
                avatar: "/proFiLe_Te.png",
                comment: "This is a test comment! Lorem ipsum dolor sit amet, consectetur adipisicing elit! Voluptas magnam atque corporis neque vero labore rerum.",
                replies: [
                  {
                    name: "Alexis.",
                    avatar: "/prOFiLe.png",
                    comment: "This is a test comment! Lorem ipsum dolor sit amet, consectetur adipisicing elit! Voluptas magnam atque corporis neque vero labore rerum.",
                    replies: [
                      {
                        name: "Tanvir.",
                        avatar: "/proFiLe_T.png",
                        comment: "This is a test comment! Lorem ipsum dolor sit amet, consectetur adipisicing elit! Vero esse explicabo molestiae sequi quo atque quae.",
                        replies: []
                      }
                    ]
                  },
                ]
              },
            ]
          },
        ]
      }
    ]
  },
]

function App() {
  return (
    <div className="mx-auto p-8">
      {comments.map((comment, i) => (<Comment comment={comment} key={i} indent={0} />))}
    </div>
  )
}

const Comment = ({ comment, indent = 0 }: { comment: Comment, indent: number }) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <span className={`flex items-start gap-3 mb-4 px-3 py-4 rounded-xl ${indent !== 0 && 'bg-gray-100'}`}>
        <img src={comment.avatar} alt="profile" className="h-14 w-14 rounded-full" />

        <div className="flex flex-col items-start">
          <span className="inline-block text-xl font-semibold mb-1">
            {comment.name}
          </span>
          <p className="text-gray-600 tracking-tight w-3/4">
            {comment.comment}
          </p>
          {comment.replies.length > 0 && (
            <button
              onClick={() => setShow(!show)}
              className="font-semibold text-md text-indigo-600"
            >
              {show ? 'Hide reply' : 'View reply'}
            </button>
          )}
        </div>
      </span>

      {show && (<div className="pl-20">
        {comment.replies?.map((c, i) => (<Comment comment={c} key={i} indent={indent + 1} />))}
      </div>)}
    </div>
  )
}

/*
type IconProps = React.HTMLAttributes<SVGElement>;

const Icons = {
  like: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  ),
  comment: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
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
  ),
} */

export default App;
