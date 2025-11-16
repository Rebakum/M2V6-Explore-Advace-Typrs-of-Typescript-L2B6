//enum
//set of fixed string leteral
// type UserRoles = "Admin" | "Editor" | "Viewer";
// enum UserRoles {
//   Admin = "Admin",
//   Editor = "Editor",
//   Viewer = "Viewer",
// }
const UserRoles = {
  Admin: "Admin",
  Editor: "Editor",
  Viewer: "Viewer",
} as const;
/*
readonly Admin: 'Admin',
readonly Editor: 'Editor',
readonly Viewer: 'Viewer',

1.typeof perator
2.keyof oparator 

const user ={
id: 222
name: 'Mezba'
}


type user{
id:number
name: string
}
typeof UserRoles
{
 Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer",}

  keyof typeof UserRoles 
  ('Admin' | ' Editor ' | 'Viewer')

*/

const canEdit = (role: keyof typeof UserRoles) => {
  if (role === UserRoles.Admin || role === UserRoles.Editor) {
    return true;
  } else return false;
};

const isEditPermissable = canEdit(UserRoles.Admin);
console.log(isEditPermissable);
