export const UserInfo = ({user}) => {
    if (!user) return <div>Empty User</div>
    return <ul>
        <li>{user.id}</li>
        <li>{user.name}</li>
        <li>{user.city}</li>
    </ul>
}