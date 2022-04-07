<script>
import { StarIcon, HomeIcon, LogoutIcon, ShoppingBagIcon, CreditCardIcon } from '@vue-hero-icons/outline'

</script>

<template>
    <div class="h-screen w-[65px] fixed flex flex-col justify-between items-center bg1 z-10">
        <div class="px-4 py-4">
            <Link><img src="/storage/bookbee-logo.png" alt="bookbee-logo" className="w-8 hover:opacity-[0.8]"/></Link>
        </div>
        <div>
            <Link><HomeIcon size="24" className="my-8 hover:opacity-[0.8]"/></Link>
            <Link><ShoppingBagIcon size="24" className="my-8 hover:opacity-[0.8]"/></Link>
            <Link><StarIcon size="24" className="my-8 hover:opacity-[0.8]"/></Link>
        </div>
        <div class="py-4">
            <Link><LogoutIcon size="24" className="hover:opacity-[0.8]"/></Link>
        </div>
    </div>
</template>
