function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _libNameThatColor = require('../lib/name-that-color');

var _libNameThatColor2 = _interopRequireDefault(_libNameThatColor);

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

'use babel';

describe('NameThatColor', function () {
  var workspaceElement = undefined,
      activationPromise = undefined;

  beforeEach(function () {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('name-that-color');
  });

  describe('when the name-that-color:toggle event is triggered', function () {
    it('hides and shows the modal panel', function () {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      expect(workspaceElement.querySelector('.name-that-color')).not.toExist();

      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'name-that-color:toggle');

      waitsForPromise(function () {
        return activationPromise;
      });

      runs(function () {
        expect(workspaceElement.querySelector('.name-that-color')).toExist();

        var nameThatColorElement = workspaceElement.querySelector('.name-that-color');
        expect(nameThatColorElement).toExist();

        var nameThatColorPanel = atom.workspace.panelForItem(nameThatColorElement);
        expect(nameThatColorPanel.isVisible()).toBe(true);
        atom.commands.dispatch(workspaceElement, 'name-that-color:toggle');
        expect(nameThatColorPanel.isVisible()).toBe(false);
      });
    });

    it('hides and shows the view', function () {
      // This test shows you an integration test testing at the view level.

      // Attaching the workspaceElement to the DOM is required to allow the
      // `toBeVisible()` matchers to work. Anything testing visibility or focus
      // requires that the workspaceElement is on the DOM. Tests that attach the
      // workspaceElement to the DOM are generally slower than those off DOM.
      jasmine.attachToDOM(workspaceElement);

      expect(workspaceElement.querySelector('.name-that-color')).not.toExist();

      // This is an activation event, triggering it causes the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'name-that-color:toggle');

      waitsForPromise(function () {
        return activationPromise;
      });

      runs(function () {
        // Now we can test for view visibility
        var nameThatColorElement = workspaceElement.querySelector('.name-that-color');
        expect(nameThatColorElement).toBeVisible();
        atom.commands.dispatch(workspaceElement, 'name-that-color:toggle');
        expect(nameThatColorElement).not.toBeVisible();
      });
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FyY2hyZWVzZS8uYXRvbS9wYWNrYWdlcy9hdG9tLW5hbWUtdGhhdC1jb2xvci9zcGVjL25hbWUtdGhhdC1jb2xvci1zcGVjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O2dDQUUwQix3QkFBd0I7Ozs7Ozs7OztBQUZsRCxXQUFXLENBQUM7O0FBU1osUUFBUSxDQUFDLGVBQWUsRUFBRSxZQUFNO0FBQzlCLE1BQUksZ0JBQWdCLFlBQUE7TUFBRSxpQkFBaUIsWUFBQSxDQUFDOztBQUV4QyxZQUFVLENBQUMsWUFBTTtBQUNmLG9CQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN0RCxxQkFBaUIsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0dBQ3RFLENBQUMsQ0FBQzs7QUFFSCxVQUFRLENBQUMsb0RBQW9ELEVBQUUsWUFBTTtBQUNuRSxNQUFFLENBQUMsaUNBQWlDLEVBQUUsWUFBTTs7O0FBRzFDLFlBQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7OztBQUl6RSxVQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDOztBQUVuRSxxQkFBZSxDQUFDLFlBQU07QUFDcEIsZUFBTyxpQkFBaUIsQ0FBQztPQUMxQixDQUFDLENBQUM7O0FBRUgsVUFBSSxDQUFDLFlBQU07QUFDVCxjQUFNLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7QUFFckUsWUFBSSxvQkFBb0IsR0FBRyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUM5RSxjQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7QUFFdkMsWUFBSSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQzNFLGNBQU0sQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNsRCxZQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO0FBQ25FLGNBQU0sQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztPQUNwRCxDQUFDLENBQUM7S0FDSixDQUFDLENBQUM7O0FBRUgsTUFBRSxDQUFDLDBCQUEwQixFQUFFLFlBQU07Ozs7Ozs7QUFPbkMsYUFBTyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDOztBQUV0QyxZQUFNLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7Ozs7QUFJekUsVUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsd0JBQXdCLENBQUMsQ0FBQzs7QUFFbkUscUJBQWUsQ0FBQyxZQUFNO0FBQ3BCLGVBQU8saUJBQWlCLENBQUM7T0FDMUIsQ0FBQyxDQUFDOztBQUVILFVBQUksQ0FBQyxZQUFNOztBQUVULFlBQUksb0JBQW9CLEdBQUcsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDOUUsY0FBTSxDQUFDLG9CQUFvQixDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDM0MsWUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztBQUNuRSxjQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7T0FDaEQsQ0FBQyxDQUFDO0tBQ0osQ0FBQyxDQUFDO0dBQ0osQ0FBQyxDQUFDO0NBQ0osQ0FBQyxDQUFDIiwiZmlsZSI6Ii9ob21lL2FyY2hyZWVzZS8uYXRvbS9wYWNrYWdlcy9hdG9tLW5hbWUtdGhhdC1jb2xvci9zcGVjL25hbWUtdGhhdC1jb2xvci1zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBiYWJlbCc7XG5cbmltcG9ydCBOYW1lVGhhdENvbG9yIGZyb20gJy4uL2xpYi9uYW1lLXRoYXQtY29sb3InO1xuXG4vLyBVc2UgdGhlIGNvbW1hbmQgYHdpbmRvdzpydW4tcGFja2FnZS1zcGVjc2AgKGNtZC1hbHQtY3RybC1wKSB0byBydW4gc3BlY3MuXG4vL1xuLy8gVG8gcnVuIGEgc3BlY2lmaWMgYGl0YCBvciBgZGVzY3JpYmVgIGJsb2NrIGFkZCBhbiBgZmAgdG8gdGhlIGZyb250IChlLmcuIGBmaXRgXG4vLyBvciBgZmRlc2NyaWJlYCkuIFJlbW92ZSB0aGUgYGZgIHRvIHVuZm9jdXMgdGhlIGJsb2NrLlxuXG5kZXNjcmliZSgnTmFtZVRoYXRDb2xvcicsICgpID0+IHtcbiAgbGV0IHdvcmtzcGFjZUVsZW1lbnQsIGFjdGl2YXRpb25Qcm9taXNlO1xuXG4gIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgIHdvcmtzcGFjZUVsZW1lbnQgPSBhdG9tLnZpZXdzLmdldFZpZXcoYXRvbS53b3Jrc3BhY2UpO1xuICAgIGFjdGl2YXRpb25Qcm9taXNlID0gYXRvbS5wYWNrYWdlcy5hY3RpdmF0ZVBhY2thZ2UoJ25hbWUtdGhhdC1jb2xvcicpO1xuICB9KTtcblxuICBkZXNjcmliZSgnd2hlbiB0aGUgbmFtZS10aGF0LWNvbG9yOnRvZ2dsZSBldmVudCBpcyB0cmlnZ2VyZWQnLCAoKSA9PiB7XG4gICAgaXQoJ2hpZGVzIGFuZCBzaG93cyB0aGUgbW9kYWwgcGFuZWwnLCAoKSA9PiB7XG4gICAgICAvLyBCZWZvcmUgdGhlIGFjdGl2YXRpb24gZXZlbnQgdGhlIHZpZXcgaXMgbm90IG9uIHRoZSBET00sIGFuZCBubyBwYW5lbFxuICAgICAgLy8gaGFzIGJlZW4gY3JlYXRlZFxuICAgICAgZXhwZWN0KHdvcmtzcGFjZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLm5hbWUtdGhhdC1jb2xvcicpKS5ub3QudG9FeGlzdCgpO1xuXG4gICAgICAvLyBUaGlzIGlzIGFuIGFjdGl2YXRpb24gZXZlbnQsIHRyaWdnZXJpbmcgaXQgd2lsbCBjYXVzZSB0aGUgcGFja2FnZSB0byBiZVxuICAgICAgLy8gYWN0aXZhdGVkLlxuICAgICAgYXRvbS5jb21tYW5kcy5kaXNwYXRjaCh3b3Jrc3BhY2VFbGVtZW50LCAnbmFtZS10aGF0LWNvbG9yOnRvZ2dsZScpO1xuXG4gICAgICB3YWl0c0ZvclByb21pc2UoKCkgPT4ge1xuICAgICAgICByZXR1cm4gYWN0aXZhdGlvblByb21pc2U7XG4gICAgICB9KTtcblxuICAgICAgcnVucygoKSA9PiB7XG4gICAgICAgIGV4cGVjdCh3b3Jrc3BhY2VFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYW1lLXRoYXQtY29sb3InKSkudG9FeGlzdCgpO1xuXG4gICAgICAgIGxldCBuYW1lVGhhdENvbG9yRWxlbWVudCA9IHdvcmtzcGFjZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLm5hbWUtdGhhdC1jb2xvcicpO1xuICAgICAgICBleHBlY3QobmFtZVRoYXRDb2xvckVsZW1lbnQpLnRvRXhpc3QoKTtcblxuICAgICAgICBsZXQgbmFtZVRoYXRDb2xvclBhbmVsID0gYXRvbS53b3Jrc3BhY2UucGFuZWxGb3JJdGVtKG5hbWVUaGF0Q29sb3JFbGVtZW50KTtcbiAgICAgICAgZXhwZWN0KG5hbWVUaGF0Q29sb3JQYW5lbC5pc1Zpc2libGUoKSkudG9CZSh0cnVlKTtcbiAgICAgICAgYXRvbS5jb21tYW5kcy5kaXNwYXRjaCh3b3Jrc3BhY2VFbGVtZW50LCAnbmFtZS10aGF0LWNvbG9yOnRvZ2dsZScpO1xuICAgICAgICBleHBlY3QobmFtZVRoYXRDb2xvclBhbmVsLmlzVmlzaWJsZSgpKS50b0JlKGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgaXQoJ2hpZGVzIGFuZCBzaG93cyB0aGUgdmlldycsICgpID0+IHtcbiAgICAgIC8vIFRoaXMgdGVzdCBzaG93cyB5b3UgYW4gaW50ZWdyYXRpb24gdGVzdCB0ZXN0aW5nIGF0IHRoZSB2aWV3IGxldmVsLlxuXG4gICAgICAvLyBBdHRhY2hpbmcgdGhlIHdvcmtzcGFjZUVsZW1lbnQgdG8gdGhlIERPTSBpcyByZXF1aXJlZCB0byBhbGxvdyB0aGVcbiAgICAgIC8vIGB0b0JlVmlzaWJsZSgpYCBtYXRjaGVycyB0byB3b3JrLiBBbnl0aGluZyB0ZXN0aW5nIHZpc2liaWxpdHkgb3IgZm9jdXNcbiAgICAgIC8vIHJlcXVpcmVzIHRoYXQgdGhlIHdvcmtzcGFjZUVsZW1lbnQgaXMgb24gdGhlIERPTS4gVGVzdHMgdGhhdCBhdHRhY2ggdGhlXG4gICAgICAvLyB3b3Jrc3BhY2VFbGVtZW50IHRvIHRoZSBET00gYXJlIGdlbmVyYWxseSBzbG93ZXIgdGhhbiB0aG9zZSBvZmYgRE9NLlxuICAgICAgamFzbWluZS5hdHRhY2hUb0RPTSh3b3Jrc3BhY2VFbGVtZW50KTtcblxuICAgICAgZXhwZWN0KHdvcmtzcGFjZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLm5hbWUtdGhhdC1jb2xvcicpKS5ub3QudG9FeGlzdCgpO1xuXG4gICAgICAvLyBUaGlzIGlzIGFuIGFjdGl2YXRpb24gZXZlbnQsIHRyaWdnZXJpbmcgaXQgY2F1c2VzIHRoZSBwYWNrYWdlIHRvIGJlXG4gICAgICAvLyBhY3RpdmF0ZWQuXG4gICAgICBhdG9tLmNvbW1hbmRzLmRpc3BhdGNoKHdvcmtzcGFjZUVsZW1lbnQsICduYW1lLXRoYXQtY29sb3I6dG9nZ2xlJyk7XG5cbiAgICAgIHdhaXRzRm9yUHJvbWlzZSgoKSA9PiB7XG4gICAgICAgIHJldHVybiBhY3RpdmF0aW9uUHJvbWlzZTtcbiAgICAgIH0pO1xuXG4gICAgICBydW5zKCgpID0+IHtcbiAgICAgICAgLy8gTm93IHdlIGNhbiB0ZXN0IGZvciB2aWV3IHZpc2liaWxpdHlcbiAgICAgICAgbGV0IG5hbWVUaGF0Q29sb3JFbGVtZW50ID0gd29ya3NwYWNlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZS10aGF0LWNvbG9yJyk7XG4gICAgICAgIGV4cGVjdChuYW1lVGhhdENvbG9yRWxlbWVudCkudG9CZVZpc2libGUoKTtcbiAgICAgICAgYXRvbS5jb21tYW5kcy5kaXNwYXRjaCh3b3Jrc3BhY2VFbGVtZW50LCAnbmFtZS10aGF0LWNvbG9yOnRvZ2dsZScpO1xuICAgICAgICBleHBlY3QobmFtZVRoYXRDb2xvckVsZW1lbnQpLm5vdC50b0JlVmlzaWJsZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG4iXX0=