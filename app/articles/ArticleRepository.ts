import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from 'rxjs/Rx';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/share';


export class Article {
    id:string;
    title:string;
    file:string;
    thumbnail:string;
    content:string;
}

@Injectable()
export class ArticleRepository {
    articleFolder: string = "content/articles/";
    articleFileList: string = "content/articles/articles_list.json";

    articles: Observable<Article[]>;
    private _articlesObserver: Observer<Article[]>;
    private _dataStore: {
        articles: Article[];
    };

    constructor(private _http: Http) {
        this.articles = new Observable<Article[]>(observer =>
            this._articlesObserver = observer).share();

        this._dataStore = { articles: [] };
    }

    loadArticles() {
        this._http.get(this.articleFileList)
        .map(response => response.json()).subscribe(data => {
            this._dataStore.articles = data;
            this.loadArticleContent(this._dataStore.articles);
            this._articlesObserver.next(this._dataStore.articles);
        }, error => console.log('Could not load todos.'));
    }

    loadArticleContent(articles:Article[]) {
        articles.forEach(ainf => {
            var contentFile = ainf.file;
            this._http.get(this.articleFolder + contentFile)
                .map(res => res.text())
                .subscribe(
                    data => ainf.content = data,
                    error => console.log(error));
        });
    }

    //createTodo(todo: Article) {
    //    this._http.post('/api/todos', todo)
    //        .map(response => response.json()).subscribe(data => {
    //        this._dataStore.todos.push(data);
    //        this._todosObserver.next(this._dataStore.todos);
    //    }, error => console.log('Could not create todo.'));
    //}

    //updateTodo(todo: Article) {
    //    this._http.put(`/api/todos/${todo.id}`, todo)
    //        .map(response => response.json()).subscribe(data => {
    //        this._dataStore.todos.forEach((todo, i) => {
    //            if (todo.id === data.id) { this._dataStore.todos[i] = data; }
    //        });
    //
    //        this._todosObserver.next(this._dataStore.todos);
    //    }, error => console.log('Could not update todo.'));
    //}

    //deleteTodo(todoId: number) {
    //    this._http.delete(`/api/todos/${todoId}`).subscribe(response => {
    //        this._dataStore.todos.forEach((t, index) => {
    //            if (t.id === todo.id) { this._dataStore.todos.splice(index, 1); }
    //        });
    //
    //        this._todosObserver.next(this._dataStore.todos);
    //    }, error => console.log('Could not delete todo.'));
    //}
}