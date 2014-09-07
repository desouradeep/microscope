var postsData = [
    {
        title: 'Introducing Telescope',
        author: 'Sacha Greif',
        url: 'http://sachagreif.com/introducing-telescope/'
    },
    {
        title: 'Meteor',
        author: 'Tom Coleman',
        url: 'http://meteor.com'
    },
    {
        title: 'The Meteor Book',
        author: 'Tom Coleman',
        url: 'http://themeteorbook.com'
    },
    {
        title: 'The Random Meteor Book',
        author: 'Souradeep De',
        url: 'http://example.com'
    }
];

Template.postsList.helpers({
    posts: postsData
});
