import { BsArrowRightShort } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";

const RightArrow = () => (
  <BsArrowRightShort
    style={{
      color: "white",
      opacity: 0.5,
      fontSize: 20,
      marginTop: 4,
      marginLeft: 20,
    }}
  />
);
const Cross = () => (
  <IoIosClose
    style={{
      color: "white",
      opacity: 0.5,
      fontSize: 25,
      position: "absolute",
      top: 20,
      right: 20,
    }}
  />
);

function Profile() {
  return (
    <div className="py-16 px-40 h-max w-screen">
    <div className="flex flex-1 mt-24 ">
      <div class="blueGrey p-10 relative m-auto rounded-lg">
        <Cross />
        <div class="">
          <h2 class="text-1xl text-center mb-20 font-medium tracking-tight text-gray-200  sm:text-2xl  ">
            User Profile
          </h2>
          {/* - */}
          <div className="flex justify-between  bg-zinc-800 px-5 rounded-lg mb-10">
            <div className="flex flex-col  pt-20 pb-5">
              <span className="text-gray-200 text-sm mb-1">Tyler Durden</span>
              <span className="text-lime-200 text-sm font-bold ">
                Premium Member
              </span>
            </div>
            <div className="flex h-20 mt-4">
              <div class="bg-gradient-to-r cursor-pointer from-zinc-700 w-40 m-3 py-2 pt-4 px-3 rounded-lg">
                <span className="text-gray-200 flex ">
                  community <RightArrow />
                </span>
              </div>
              <div class="bg-gradient-to-r cursor-pointer from-zinc-700 w-40 m-3 py-2 pt-4 px-3 rounded-lg">
                <span className="text-gray-200 flex">
                  Notifications <RightArrow />
                </span>
              </div>
            </div>
          </div>

          {/* - */}

          {/*  */}
          <div className="flex flex-1 gap-5">
            <div className="flex flex-col mx-2 ">
              <span className="text-gray-200 text-lg mb-2 font-medium">
                Name
              </span>
              <span className="text-gray-200 text-sm mb-1">Tyler Durden</span>
              <span className="text-lime-200 text-sm">Change name</span>
            </div>
            <div className="flex flex-col mx-2 ">
              <span className="text-gray-200 text-lg mb-2 font-medium">
                Email
              </span>
              <span className="text-gray-200 text-sm mb-1">TD@gmail.com</span>
              <span className="text-lime-200 text-sm">Change Email</span>
            </div>
            <div className="flex flex-col mx-2 ">
              <span className="text-gray-200 text-lg mb-2 font-medium">
                Job Title
              </span>
              <span className="text-gray-400 text-sm mb-1">Student</span>
              <span className="text-lime-200 text-sm">Change Title</span>
            </div>
            <div className="flex flex-col mx-2 ">
              <span className="text-gray-200 text-lg mb-2 font-medium">
                Password
              </span>
              <span className="text-sm mb-1 text-lime-200">
                Change Password
              </span>
              <span className="text-lime-200 text-sm">Enable 2FA</span>
            </div>
            <div className="flex flex-col mx-2 ">
              <span className="text-gray-200 text-lg mb-2 font-medium">
                Language
              </span>
              <span className="text-gray-400 text-sm mb-1">English</span>
              <span className="text-lime-200 text-sm">Change Language</span>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  </div>
  );
}

export default Profile;
