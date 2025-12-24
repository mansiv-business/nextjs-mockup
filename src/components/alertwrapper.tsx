'use client'
import dynamic from 'next/dynamic';

const DynamicAlert = dynamic(() => import('@/components/alertmessage'), { ssr: false })

const AlertWrapper = () => {
    return(
        <>
        <DynamicAlert/>
        </>
    )
}

export default AlertWrapper
