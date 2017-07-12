/**
 * vuejs过滤器
 */
import Vue from 'vue'
import moment from 'moment'

Vue.filter('friendlyDate', function (time, format) {
    return moment.unix(time, format)
})
