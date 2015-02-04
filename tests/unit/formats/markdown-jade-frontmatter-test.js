import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('format:markdown-jade-frontmatter', 'MarkdownJadeFrontmatterFormat', {});

test('it should convert a file with frontmatter and jade with a markdown block', function() {
  var format = this.subject();
  var fileContent =
        "---\n" +
        "title: 'Hello world!'\n" +
        "date: 1/2/2014\n" +
        "_content: false\n" +
        "---\n\n" +
        "extends single_post_layout\n\n" +
        "block content\n" +
        "  :markdown\n" +
        "    This is my **first blog post** yaaaa!";
  var obj = format.fromFile(fileContent);

  ok(obj);
  equal(obj.title, "Hello world!");
  equal(obj.jade_body, "extends single_post_layout\n\nblock content\n  :markdown\n    This is my **first blog post** yaaaa!");
  equal(obj.body, "This is my **first blog post** yaaaa!");
});

test('it should convert an object to jade with frontmatter and a markdown block', function() {
  var format = this.subject();
  var obj = {
    title: 'Hello World!',
    body: "This is my **first blog post** yaaaa!"
  };
  var fileContent = format.toFile(obj);

  ok(fileContent);
  equal(fileContent, "---\ntitle: \"Hello World!\"\n---\n\n:markdown\n  This is my **first blog post** yaaaa!");
});