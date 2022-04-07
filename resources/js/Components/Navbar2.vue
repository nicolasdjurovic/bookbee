<script>
import { Card } from '@vue-hero-icons/outline'
</script>

<div className="w-full h-[65px] flex flex-col justify-center bg-[#171717] items-end pl-20 pr-4">
    <p className="text-white">{auth.user.email}</p>
    <div className="flex items-center">
    <p className="text-white">10</p>
    <Link><RiCoinsLine size="24px" color="white"/></Link>
    </div>
</div>
