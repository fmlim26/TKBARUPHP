const { mix } = require('laravel-mix');

mix.disableNotifications();

mix.copy('node_modules/vue-numeric/src/vue-numeric.vue', 'resources/assets/js/components');

mix.styles([
        './node_modules/bootstrap/dist/css/bootstrap.min.css',
        './node_modules/font-awesome/css/font-awesome.min.css',
        './node_modules/ionicons/dist/css/ionicons.css',
        './node_modules/admin-lte/dist/css/AdminLTE.min.css',
        './node_modules/admin-lte/dist/css/skins/_all-skins.min.css',
        './node_modules/icheck/skins/square/blue.css',
        './node_modules/select2/dist/css/select2.min.css',
        './node_modules/bootstrap-sweetalert/dist/sweetalert.css',
        './node_modules/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
        './node_modules/animate.css/animate.css',
        './resources/assets/css/adminlte.custom.css'
    ], 'public/adminlte/css/adminlte.css')
    .scripts([
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/bootstrap/dist/js/bootstrap.min.js',
        './node_modules/vue/dist/vue.min.js',
        './node_modules/axios/dist/axios.js',
        './node_modules/vee-validate/dist/vee-validate.js',
        './node_modules/vee-validate/dist/locale/id.js',
        './node_modules/moment/min/moment.min.js',
        './node_modules/moment-duration-format/lib/moment-duration-format.js',
        './node_modules/icheck/icheck.min.js',
        './node_modules/select2/dist/js/select2.full.min.js',
        './node_modules/jquery-slimscroll/jquery.slimscroll.js',
        './node_modules/admin-lte/dist/js/adminlte.min.js',
        './node_modules/bootstrap-sweetalert/dist/sweetalert.min.js',
        './node_modules/lodash/lodash.min.js',
        './node_modules/jquery-gotop/src/jquery.gotop.min.js',
        './node_modules/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
        './node_modules/numeral/min/numeral.min.js',
        './node_modules/modernizr/bin/modernizr',
        './node_modules/noty/js/noty/packaged/jquery.noty.packaged.js',
        './node_modules/urijs/src/URI.js',
        './resources/assets/js/adminlte.custom.js'
    ], 'public/adminlte/js/adminlte.js')
    .copy('node_modules/admin-lte/dist/img/boxed-bg.jpg', 'public/adminlte/img')
    .copy('node_modules/highcharts/highcharts.js', 'public/adminlte/js')
    .copy('node_modules/fullcalendar/dist/fullcalendar.min.js', 'public/adminlte/js')
    .copy('node_modules/fullcalendar/dist/locale/id.js', 'public/adminlte/js')
    .copy('node_modules/tooltipster/dist/js/tooltipster.bundle.min.js', 'public/adminlte/js')
    .copy('node_modules/pdfobject/pdfobject.min.js', 'public/adminlte/js')
    .copy('node_modules/bootstrap/fonts', 'public/adminlte/fonts')
    .copy('node_modules/font-awesome/fonts', 'public/adminlte/fonts')
    .copy('node_modules/ionicons/dist/fonts', 'public/adminlte/fonts')
    .copy('node_modules/icheck/skins/square/blue.png', 'public/adminlte/css')
    .copy('node_modules/icheck/skins/square/blue@2x.png', 'public/adminlte/css')
    .copy('node_modules/highcharts/css/highcharts.css', 'public/adminlte/css')
    .copy('node_modules/fullcalendar/dist/fullcalendar.min.css', 'public/adminlte/css')
    .copy('node_modules/fullcalendar/dist/fullcalendar.print.min.css', 'public/adminlte/css')
    .copy('node_modules/tooltipster/dist/css/tooltipster.bundle.min.css', 'public/adminlte/css')
    .copy('node_modules/tooltipster/dist/css/plugins/tooltipster/sideTip/themes/tooltipster-sideTip-shadow.min.css', 'public/adminlte/css')
    .copy('node_modules/bootstrap-fileinput/js/fileinput.js', 'public/adminlte/fileinput')
    .copy('node_modules/bootstrap-fileinput/js/locales/id.js', 'public/adminlte/fileinput')
    .copy('node_modules/bootstrap-fileinput/css/fileinput.css', 'public/adminlte/fileinput')
    .copy('resources/assets/js/parsley.config.js', 'public/adminlte/parsley')
    .copy('node_modules/parsleyjs/dist/parsley.min.js', 'public/adminlte/parsley')
    .copy('node_modules/parsleyjs/dist/i18n/en.js', 'public/adminlte/parsley')
    .copy('node_modules/parsleyjs/dist/i18n/id.js', 'public/adminlte/parsley')
    .copy('node_modules/parsleyjs/dist/i18n/en.extra.js', 'public/adminlte/parsley')
    .copy('node_modules/parsleyjs/dist/i18n/id.extra.js', 'public/adminlte/parsley')
    .copy('node_modules/autonumeric/autoNumeric-min.js', 'public/adminlte/js')
    .copy('resources/assets/css/frontweb.css', 'public/frontweb/css');

mix.js('resources/assets/js/app.js', 'public/adminlte/js');
