import Link from 'next/link'
import React from 'react'

export default function CategoryCompo({image,name}) {
  return (
    <div>
<Link href="/">  
<div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">

   <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <img class="w-10 h-10 rounded-full" src={image} alt="categories image"/>
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {name}
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            click to get more information
                        </p>
                    </div>
                </div>
            </li>
        </ul>
   </div>

</div>
</Link>
    </div>
  )
}
