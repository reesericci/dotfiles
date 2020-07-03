Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _atom = require('atom');

var _colorNamer = require('color-namer');

var _colorNamer2 = _interopRequireDefault(_colorNamer);

'use babel';

exports['default'] = {

  selection: "",

  activate: function activate(state) {
    var _this = this;

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new _atom.CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'name-that-color:name-selection': function nameThatColorNameSelection() {
        return _this.nameSelection();
      }
    }));

    atom.workspace.observeActivePaneItem(function (editor) {
      if (editor && typeof editor.observeSelections === 'function') {
        editor.observeSelections(function (selection) {
          _this.selection = selection;
        });
      }
    });
  },

  nameSelection: function nameSelection() {
    var text = this.selection.getText();
    if (!this.selection.isEmpty()) {
      try {
        var names = (0, _colorNamer2['default'])(text);
        var result = names.html[0].name;
        this.selection.insertText(result + ' ' + text);
      } catch (e) {
        atom.notifications.addError("Invalid Color Code", { description: text });
      }
    }
  }
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FyY2hyZWVzZS8uYXRvbS9wYWNrYWdlcy9hdG9tLW5hbWUtdGhhdC1jb2xvci9saWIvbmFtZS10aGF0LWNvbG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztvQkFFb0MsTUFBTTs7MEJBQ25CLGFBQWE7Ozs7QUFIcEMsV0FBVyxDQUFDOztxQkFLRzs7QUFFYixXQUFTLEVBQUUsRUFBRTs7QUFFYixVQUFRLEVBQUEsa0JBQUMsS0FBSyxFQUFFOzs7O0FBRWQsUUFBSSxDQUFDLGFBQWEsR0FBRywrQkFBeUIsQ0FBQzs7O0FBRy9DLFFBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFO0FBQ3pELHNDQUFnQyxFQUFFO2VBQU0sTUFBSyxhQUFhLEVBQUU7T0FBQTtLQUM3RCxDQUFDLENBQUMsQ0FBQzs7QUFFSixRQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLFVBQUMsTUFBTSxFQUFLO0FBQy9DLFVBQUcsTUFBTSxJQUFJLE9BQU8sTUFBTSxDQUFDLGlCQUFpQixLQUFLLFVBQVUsRUFBRTtBQUMzRCxjQUFNLENBQUMsaUJBQWlCLENBQUMsVUFBQyxTQUFTLEVBQUs7QUFDdEMsZ0JBQUssU0FBUyxHQUFHLFNBQVMsQ0FBQztTQUM1QixDQUFDLENBQUE7T0FDSDtLQUNGLENBQUMsQ0FBQTtHQUNIOztBQUVELGVBQWEsRUFBQSx5QkFBRztBQUNkLFFBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDcEMsUUFBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEVBQUU7QUFDNUIsVUFBSTtBQUNGLFlBQUksS0FBSyxHQUFHLDZCQUFXLElBQUksQ0FBQyxDQUFDO0FBQzdCLFlBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQ2hDLFlBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFJLE1BQU0sU0FBSSxJQUFJLENBQUcsQ0FBQztPQUNoRCxDQUFDLE9BQU0sQ0FBQyxFQUFFO0FBQ1QsWUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLEVBQUUsRUFBQyxXQUFXLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQTtPQUN2RTtLQUNGO0dBQ0Y7Q0FDRiIsImZpbGUiOiIvaG9tZS9hcmNocmVlc2UvLmF0b20vcGFja2FnZXMvYXRvbS1uYW1lLXRoYXQtY29sb3IvbGliL25hbWUtdGhhdC1jb2xvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2UgYmFiZWwnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGVEaXNwb3NhYmxlIH0gZnJvbSAnYXRvbSc7XG5pbXBvcnQgY29sb3JOYW1lciBmcm9tICdjb2xvci1uYW1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICBzZWxlY3Rpb246IFwiXCIsXG5cbiAgYWN0aXZhdGUoc3RhdGUpIHtcbiAgICAvLyBFdmVudHMgc3Vic2NyaWJlZCB0byBpbiBhdG9tJ3Mgc3lzdGVtIGNhbiBiZSBlYXNpbHkgY2xlYW5lZCB1cCB3aXRoIGEgQ29tcG9zaXRlRGlzcG9zYWJsZVxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucyA9IG5ldyBDb21wb3NpdGVEaXNwb3NhYmxlKCk7XG5cbiAgICAvLyBSZWdpc3RlciBjb21tYW5kIHRoYXQgdG9nZ2xlcyB0aGlzIHZpZXdcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKGF0b20uY29tbWFuZHMuYWRkKCdhdG9tLXdvcmtzcGFjZScsIHtcbiAgICAgICduYW1lLXRoYXQtY29sb3I6bmFtZS1zZWxlY3Rpb24nOiAoKSA9PiB0aGlzLm5hbWVTZWxlY3Rpb24oKVxuICAgIH0pKTtcbiAgICBcbiAgICBhdG9tLndvcmtzcGFjZS5vYnNlcnZlQWN0aXZlUGFuZUl0ZW0oKGVkaXRvcikgPT4ge1xuICAgICAgaWYoZWRpdG9yICYmIHR5cGVvZiBlZGl0b3Iub2JzZXJ2ZVNlbGVjdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZWRpdG9yLm9ic2VydmVTZWxlY3Rpb25zKChzZWxlY3Rpb24pID0+IHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHNlbGVjdGlvbjtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuICBcbiAgbmFtZVNlbGVjdGlvbigpIHtcbiAgICBsZXQgdGV4dCA9IHRoaXMuc2VsZWN0aW9uLmdldFRleHQoKTtcbiAgICBpZighdGhpcy5zZWxlY3Rpb24uaXNFbXB0eSgpKSB7XG4gICAgICB0cnkge1xuICAgICAgICBsZXQgbmFtZXMgPSBjb2xvck5hbWVyKHRleHQpO1xuICAgICAgICBsZXQgcmVzdWx0ID0gbmFtZXMuaHRtbFswXS5uYW1lO1xuICAgICAgICB0aGlzLnNlbGVjdGlvbi5pbnNlcnRUZXh0KGAke3Jlc3VsdH0gJHt0ZXh0fWApO1xuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIGF0b20ubm90aWZpY2F0aW9ucy5hZGRFcnJvcihcIkludmFsaWQgQ29sb3IgQ29kZVwiLCB7ZGVzY3JpcHRpb246IHRleHR9KVxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuIl19