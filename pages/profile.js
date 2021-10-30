import { useSession, getSession } from "next-auth/client"
import Nav from '../Components/Nav'

export default function Profile() {
    const [session, loading] = useSession()

    if (loading) {
        return (
            <>
                <Nav />
                <p>Loading...</p>
            </>
        )
    }

    if (!session) {
        return (
            <>
                <Nav />
                <p>Access Denied</p>
            </>
        )
    }
    if (session)
        return (
            <>
                <Nav />
                <h1>Protected Page</h1>
                <p>You can view this page because you are signed in.</p>
            </>
        )
}