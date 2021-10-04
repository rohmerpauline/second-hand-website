import { useRouter } from 'next/router'

const ad = () => {

    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            This is the ad {id}
        </div>
    )
}

export default ad