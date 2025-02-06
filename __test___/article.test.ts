// __test__/article.test.ts

import { createArticle, getAllArticles, updateArticle, deleteArticle } from '../src/controllers/articleConroller';
import { Article } from '../src/models/Article';

jest.mock('../src/models/Article');  // Mock the Article model

describe('Article Controller', () => {
  let res: any;
  let req: any;

  beforeEach(() => {
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
    req = {
      body: {},
      params: {},
    };
  });

  it('should create an article successfully', async () => {
    // Setup mock behavior for Article.create
    Article.create = jest.fn().mockResolvedValue({ title: 'Test', content: 'Test content' });

    req.body = { title: 'Test', content: 'Test content' };

    await createArticle(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      success: true,
      message: 'Create article is success',
      data: { title: 'Test', content: 'Test content' },
    });
  });

  it('should return an error if title is missing', async () => {
    req.body = { content: 'Test content' };

    await createArticle(req, res);

    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      message: 'Title is required',
      data: null,
    });
  });

  it('should get all articles successfully', async () => {
    const mockArticles = [{ title: 'Article 1', content: 'Content 1' }];
    Article.findAll = jest.fn().mockResolvedValue(mockArticles);

    await getAllArticles(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      success: true,
      message: 'Get article is success',
      data: mockArticles,
    });
  });

  it('should update an article successfully', async () => {
    const mockArticle = { title: 'Old Title', content: 'Old Content', save: jest.fn() };
    Article.findByPk = jest.fn().mockResolvedValue(mockArticle);

    req.params = { id: '1' };
    req.body = { title: 'Updated Title', content: 'Updated Content' };

    await updateArticle(req, res);

    expect(Article.findByPk).toHaveBeenCalledWith('1');
    expect(mockArticle.save).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      success: true,
      message: 'Update article is success',
      data: null,
    });
  });

  it('should return an error if title or content is missing during update', async () => {
    req.params = { id: '1' };
    req.body = { title: '', content: '' };

    await updateArticle(req, res);

    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      message: 'Title and Content are required',
      data: null,
    });
  });

  it('should return 404 if article not found during update', async () => {
    Article.findByPk = jest.fn().mockResolvedValue(null);

    req.params = { id: '1' };
    req.body = { title: 'Updated Title', content: 'Updated Content' };

    await updateArticle(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({
      success: true,
      message: 'Article is not found',
      data: null,
    });
  });

  it('should delete an article successfully', async () => {
    const mockArticle = { destroy: jest.fn() };
    Article.findByPk = jest.fn().mockResolvedValue(mockArticle);

    req.params = { id: '1' };

    await deleteArticle(req, res);

    expect(Article.findByPk).toHaveBeenCalledWith('1');
    expect(mockArticle.destroy).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      success: true,
      message: 'Delete article is success',
      data: null,
    });
  });

  it('should return 404 if article not found during delete', async () => {
    Article.findByPk = jest.fn().mockResolvedValue(null);

    req.params = { id: '1' };

    await deleteArticle(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({
      success: true,
      message: 'Article is not found',
      data: null,
    });
  });

  it('should return error if delete fails', async () => {
    Article.findByPk = jest.fn().mockResolvedValue({ destroy: jest.fn().mockRejectedValue(new Error('Error')) });

    req.params = { id: '1' };

    await deleteArticle(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      message: 'Delete article is error',
      data: null,
    });
  });
});