import {first} from 'lodash'

declare global {
    interface Array<T> {
        /**
         * 获取数组第一个元素
         */
        first<T>(this: T[]): T | undefined

    }
}
Array.prototype.first = function <T>(this: T[]): T | undefined {
    return first<T>(this)
}
