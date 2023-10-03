import filterComments from '../../../api/filters/filterComments.js';

it('should filter the 2 most frequent words from comments', () => {
    const data = [
        { body: 'aaa' },
        { body: 'bbb' },
        { body: 'aaa' },
        { body: 'zzz' },
        { body: 'ccc' },
        { body: 'bbb' },
    ];

    const expectedFilteredComments = [
        'aaa', 'bbb'
    ];

    // limit in this case is 2 and not 3
    const filteredComments = filterComments(data, 2);

    expect(filteredComments).toStrictEqual(expectedFilteredComments);
});