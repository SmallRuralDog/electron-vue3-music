import {first} from 'lodash'

declare global {
    interface Array<T> {
        /**
         * 获取数组第一个元素
         */
        first<T>(this: T[]): T

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
String.prototype.toInt = function (this: string): number {
    return parseInt(this)
}
