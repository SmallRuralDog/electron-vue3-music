import {first, sampleSize} from 'lodash'

declare global {
    interface Array<T> {
        /**
         * 获取数组第一个元素
         */
        first<T>(this: T[]): T

        /**
         * 获得 n 个随机元素
         * @param size
         */
        sampleSize<T>(this: T[], size: number): T[]

    }

    interface String {
        /**
         * 转换成int类型
         */
        toInt(this: string): number
    }
}
Array.prototype.first = function <T>(this: T[]): T {
    return first<T>(this) as T
}
Array.prototype.sampleSize = function <T>(this: T[], size: number): T[] {
    return sampleSize<T>(this, size) as T[]
}
String.prototype.toInt = function (this: string): number {
    return parseInt(this)
}
