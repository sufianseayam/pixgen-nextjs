'use client'
import { UpdateUserModal } from "@/components/UpdateUserModal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";



const ProfilePage = () => {
    const userData=authClient.useSession()
    // console.log(userData);
    const user =userData.data?.user;
    return (
        <div>
        <Card className=" max-w-96 mx-auto flex flex-col items-center border-2 my-5 ">
             <Avatar className="h-20 w-20">
                    <Avatar.Image alt="John Doe" src={user?.image}
                    referrerPolicy="no-referrer"
                    />
                    <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                  </Avatar>
                  <h2 className="text-2xl font-bold ">{user?.name}</h2>
                  <p className="text-muted">{user?.email}</p>

                  <UpdateUserModal></UpdateUserModal>
        </Card>
        </div>
    );
};

export default ProfilePage;