chrome.runtime.onInstalled.addListener(() => {
  // TODO: on installed function
  console.log('Installed');
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(`Query the database with ${request.domain}`);
  console.log(request.domain);
  console.log(sender);
  sendResponse([
    {
      id: 'DC_kwDOFFVowM4APGSW',
      upvoteCount: 1,
      viewerHasUpvoted: false,
      viewerCanUpvote: false,
      viewerDidAuthor: false,
      createdAt: '2022-10-25T07:52:52Z',
      url: 'https://github.com/laymonage/base/discussions/14#discussioncomment-3957910',
      authorAssociation: 'NONE',
      lastEditedAt: null,
      deletedAt: null,
      isMinimized: false,
      bodyHTML: '<p dir="auto">0</p>',
      author: {
        avatarUrl:
          'https://avatars.githubusercontent.com/u/41328702?u=ec6a5a5d6c758830113ceb56ebf2fbe2a992ef32&v=4',
        login: 'Liam-cocoball',
        url: 'https://github.com/Liam-cocoball',
      },
      replyCount: 0,
      reactions: {
        THUMBS_UP: {
          count: 0,
          viewerHasReacted: false,
        },
        THUMBS_DOWN: {
          count: 0,
          viewerHasReacted: false,
        },
        LAUGH: {
          count: 0,
          viewerHasReacted: false,
        },
        HOORAY: {
          count: 0,
          viewerHasReacted: false,
        },
        CONFUSED: {
          count: 0,
          viewerHasReacted: false,
        },
        HEART: {
          count: 0,
          viewerHasReacted: false,
        },
        ROCKET: {
          count: 0,
          viewerHasReacted: false,
        },
        EYES: {
          count: 0,
          viewerHasReacted: false,
        },
      },
      replies: [],
    },
    {
      id: 'DC_kwDOFFVowM4APR8C',
      upvoteCount: 1,
      viewerHasUpvoted: false,
      viewerCanUpvote: false,
      viewerDidAuthor: false,
      createdAt: '2022-10-29T14:39:25Z',
      url: 'https://github.com/laymonage/base/discussions/14#discussioncomment-4005634',
      authorAssociation: 'NONE',
      lastEditedAt: null,
      deletedAt: null,
      isMinimized: false,
      bodyHTML: '<p dir="auto">super cool, oh yeahhhh</p>',
      author: {
        avatarUrl:
          'https://avatars.githubusercontent.com/u/7351351?u=fd1201819e4739eeac9de3a75331d48deeeea671&v=4',
        login: 'lephuhai',
        url: 'https://github.com/lephuhai',
      },
      replyCount: 0,
      reactions: {
        THUMBS_UP: {
          count: 0,
          viewerHasReacted: false,
        },
        THUMBS_DOWN: {
          count: 0,
          viewerHasReacted: false,
        },
        LAUGH: {
          count: 0,
          viewerHasReacted: false,
        },
        HOORAY: {
          count: 0,
          viewerHasReacted: false,
        },
        CONFUSED: {
          count: 0,
          viewerHasReacted: false,
        },
        HEART: {
          count: 0,
          viewerHasReacted: false,
        },
        ROCKET: {
          count: 0,
          viewerHasReacted: false,
        },
        EYES: {
          count: 0,
          viewerHasReacted: false,
        },
      },
      replies: [],
    },
    {
      id: 'DC_kwDOFFVowM4APeHD',
      upvoteCount: 1,
      viewerHasUpvoted: false,
      viewerCanUpvote: false,
      viewerDidAuthor: false,
      createdAt: '2022-11-04T10:21:04Z',
      url: 'https://github.com/laymonage/base/discussions/14#discussioncomment-4055491',
      authorAssociation: 'NONE',
      lastEditedAt: null,
      deletedAt: null,
      isMinimized: false,
      bodyHTML: '<p dir="auto">test</p>',
      author: {
        avatarUrl:
          'https://avatars.githubusercontent.com/u/100331812?u=ca146bfa7100515a02c7b9e409ef4e8412b82a45&v=4',
        login: 'ourstorycomic',
        url: 'https://github.com/ourstorycomic',
      },
      replyCount: 0,
      reactions: {
        THUMBS_UP: {
          count: 0,
          viewerHasReacted: false,
        },
        THUMBS_DOWN: {
          count: 0,
          viewerHasReacted: false,
        },
        LAUGH: {
          count: 0,
          viewerHasReacted: false,
        },
        HOORAY: {
          count: 0,
          viewerHasReacted: false,
        },
        CONFUSED: {
          count: 0,
          viewerHasReacted: false,
        },
        HEART: {
          count: 0,
          viewerHasReacted: false,
        },
        ROCKET: {
          count: 0,
          viewerHasReacted: false,
        },
        EYES: {
          count: 0,
          viewerHasReacted: false,
        },
      },
      replies: [],
    },
    {
      id: 'DC_kwDOFFVowM4APqIG',
      upvoteCount: 1,
      viewerHasUpvoted: false,
      viewerCanUpvote: false,
      viewerDidAuthor: false,
      createdAt: '2022-11-10T07:14:56Z',
      url: 'https://github.com/laymonage/base/discussions/14#discussioncomment-4104710',
      authorAssociation: 'NONE',
      lastEditedAt: null,
      deletedAt: null,
      isMinimized: false,
      bodyHTML: '<p dir="auto">nice</p>',
      author: {
        avatarUrl:
          'https://avatars.githubusercontent.com/u/25417316?u=23169fe396647d212465d3fedcf394fbc84fa197&v=4',
        login: 'Dagimal',
        url: 'https://github.com/Dagimal',
      },
      replyCount: 0,
      reactions: {
        THUMBS_UP: {
          count: 0,
          viewerHasReacted: false,
        },
        THUMBS_DOWN: {
          count: 0,
          viewerHasReacted: false,
        },
        LAUGH: {
          count: 0,
          viewerHasReacted: false,
        },
        HOORAY: {
          count: 0,
          viewerHasReacted: false,
        },
        CONFUSED: {
          count: 0,
          viewerHasReacted: false,
        },
        HEART: {
          count: 0,
          viewerHasReacted: false,
        },
        ROCKET: {
          count: 0,
          viewerHasReacted: false,
        },
        EYES: {
          count: 0,
          viewerHasReacted: false,
        },
      },
      replies: [],
    },
    {
      id: 'DC_kwDOFFVowM4AQEf7',
      upvoteCount: 1,
      viewerHasUpvoted: false,
      viewerCanUpvote: false,
      viewerDidAuthor: false,
      createdAt: '2022-11-23T06:25:31Z',
      url: 'https://github.com/laymonage/base/discussions/14#discussioncomment-4212731',
      authorAssociation: 'NONE',
      lastEditedAt: null,
      deletedAt: null,
      isMinimized: false,
      bodyHTML: '<p dir="auto">test idscuss</p>',
      author: {
        avatarUrl:
          'https://avatars.githubusercontent.com/u/44725452?u=a9309f3444b02715cf38d75b38c5883ebd0efe73&v=4',
        login: 'changzhenlin',
        url: 'https://github.com/changzhenlin',
      },
      replyCount: 0,
      reactions: {
        THUMBS_UP: {
          count: 0,
          viewerHasReacted: false,
        },
        THUMBS_DOWN: {
          count: 0,
          viewerHasReacted: false,
        },
        LAUGH: {
          count: 0,
          viewerHasReacted: false,
        },
        HOORAY: {
          count: 0,
          viewerHasReacted: false,
        },
        CONFUSED: {
          count: 0,
          viewerHasReacted: false,
        },
        HEART: {
          count: 0,
          viewerHasReacted: false,
        },
        ROCKET: {
          count: 0,
          viewerHasReacted: false,
        },
        EYES: {
          count: 0,
          viewerHasReacted: false,
        },
      },
      replies: [],
    },
    {
      id: 'DC_kwDOFFVowM4AQbri',
      upvoteCount: 1,
      viewerHasUpvoted: false,
      viewerCanUpvote: false,
      viewerDidAuthor: false,
      createdAt: '2022-12-04T19:36:25Z',
      url: 'https://github.com/laymonage/base/discussions/14#discussioncomment-4307682',
      authorAssociation: 'NONE',
      lastEditedAt: null,
      deletedAt: null,
      isMinimized: false,
      bodyHTML: '<p dir="auto">Test.</p>\n<h1 dir="auto">header</h1>',
      author: {
        avatarUrl:
          'https://avatars.githubusercontent.com/u/52756764?u=db3aef61b6ac676d2dfef7b76c88292999cb58b6&v=4',
        login: 'chris-tipotsch',
        url: 'https://github.com/chris-tipotsch',
      },
      replyCount: 0,
      reactions: {
        THUMBS_UP: {
          count: 0,
          viewerHasReacted: false,
        },
        THUMBS_DOWN: {
          count: 0,
          viewerHasReacted: false,
        },
        LAUGH: {
          count: 0,
          viewerHasReacted: false,
        },
        HOORAY: {
          count: 0,
          viewerHasReacted: false,
        },
        CONFUSED: {
          count: 0,
          viewerHasReacted: false,
        },
        HEART: {
          count: 0,
          viewerHasReacted: false,
        },
        ROCKET: {
          count: 0,
          viewerHasReacted: false,
        },
        EYES: {
          count: 0,
          viewerHasReacted: false,
        },
      },
      replies: [],
    },
    {
      id: 'DC_kwDOFFVowM4AQcw2',
      upvoteCount: 1,
      viewerHasUpvoted: false,
      viewerCanUpvote: false,
      viewerDidAuthor: false,
      createdAt: '2022-12-05T11:04:18Z',
      url: 'https://github.com/laymonage/base/discussions/14#discussioncomment-4312118',
      authorAssociation: 'NONE',
      lastEditedAt: null,
      deletedAt: null,
      isMinimized: false,
      bodyHTML: '<p dir="auto">南无阿弥陀佛🙏🏻</p>',
      author: {
        avatarUrl:
          'https://avatars.githubusercontent.com/u/429254?u=2d8cab361642a60b7feed27e3bba6b705c25fba5&v=4',
        login: 'fofen',
        url: 'https://github.com/fofen',
      },
      replyCount: 0,
      reactions: {
        THUMBS_UP: {
          count: 0,
          viewerHasReacted: false,
        },
        THUMBS_DOWN: {
          count: 0,
          viewerHasReacted: false,
        },
        LAUGH: {
          count: 0,
          viewerHasReacted: false,
        },
        HOORAY: {
          count: 0,
          viewerHasReacted: false,
        },
        CONFUSED: {
          count: 0,
          viewerHasReacted: false,
        },
        HEART: {
          count: 0,
          viewerHasReacted: false,
        },
        ROCKET: {
          count: 0,
          viewerHasReacted: false,
        },
        EYES: {
          count: 0,
          viewerHasReacted: false,
        },
      },
      replies: [],
    },
    {
      id: 'DC_kwDOFFVowM4ARdTV',
      upvoteCount: 1,
      viewerHasUpvoted: false,
      viewerCanUpvote: false,
      viewerDidAuthor: false,
      createdAt: '2023-01-02T22:14:51Z',
      url: 'https://github.com/laymonage/base/discussions/14#discussioncomment-4576469',
      authorAssociation: 'NONE',
      lastEditedAt: null,
      deletedAt: null,
      isMinimized: false,
      bodyHTML: '<p dir="auto">2023 HAPPY NEW YEAR EVERYONE !!!!!</p>',
      author: {
        avatarUrl:
          'https://avatars.githubusercontent.com/u/115656718?u=673cd62f298653c1ee0ff63382631f7a3ffe2541&v=4',
        login: 'Honekichii',
        url: 'https://github.com/Honekichii',
      },
      replyCount: 1,
      reactions: {
        THUMBS_UP: {
          count: 0,
          viewerHasReacted: false,
        },
        THUMBS_DOWN: {
          count: 0,
          viewerHasReacted: false,
        },
        LAUGH: {
          count: 0,
          viewerHasReacted: false,
        },
        HOORAY: {
          count: 1,
          viewerHasReacted: false,
        },
        CONFUSED: {
          count: 0,
          viewerHasReacted: false,
        },
        HEART: {
          count: 1,
          viewerHasReacted: false,
        },
        ROCKET: {
          count: 0,
          viewerHasReacted: false,
        },
        EYES: {
          count: 0,
          viewerHasReacted: false,
        },
      },
      replies: [
        {
          id: 'DC_kwDOFFVowM4ARdTW',
          viewerDidAuthor: false,
          createdAt: '2023-01-02T22:15:05Z',
          url: 'https://github.com/laymonage/base/discussions/14#discussioncomment-4576470',
          authorAssociation: 'NONE',
          lastEditedAt: null,
          deletedAt: null,
          isMinimized: false,
          bodyHTML: '<p dir="auto">Hooray !</p>',
          author: {
            avatarUrl:
              'https://avatars.githubusercontent.com/u/115656718?u=673cd62f298653c1ee0ff63382631f7a3ffe2541&v=4',
            login: 'Honekichii',
            url: 'https://github.com/Honekichii',
          },
          reactions: {
            THUMBS_UP: {
              count: 0,
              viewerHasReacted: false,
            },
            THUMBS_DOWN: {
              count: 0,
              viewerHasReacted: false,
            },
            LAUGH: {
              count: 0,
              viewerHasReacted: false,
            },
            HOORAY: {
              count: 0,
              viewerHasReacted: false,
            },
            CONFUSED: {
              count: 0,
              viewerHasReacted: false,
            },
            HEART: {
              count: 0,
              viewerHasReacted: false,
            },
            ROCKET: {
              count: 0,
              viewerHasReacted: false,
            },
            EYES: {
              count: 0,
              viewerHasReacted: false,
            },
          },
          replyToId: 'DC_kwDOFFVowM4ARdTV',
        },
      ],
    },
  ]);
});
