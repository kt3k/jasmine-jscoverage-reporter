
module.exports = (g) ->

  g.initConfig

    jshint:
      converter:
        src: 'convert-to-coveralls.js'
        options:
          jshintrc: '.jshintrc_node'

      reporter:
        src: 'reporter.js'
        options:
          jshintrc: '.jshintrc'

  g.loadNpmTasks 'grunt-contrib-jshint'
