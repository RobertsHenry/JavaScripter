class Book {
	constructor(title, author, pageCount) {
		this.title = title;
		this.author = author;
		this.pageCount = pageCount;
	}
	getTitle() {
		return this.title;
	}
	getTitleShow() {
		console.log(this.title);
	}
	getAuthor() {
		return this.author;
	}
	getAuthorShow() {
		console.log(this.author);
	}
	getPageCount() {
		return this.pageCount;
	}
	getPageCountShow() {
		console.log(this.pageCount);
	}
}

function addToCatalouge(obj) {
	bookCatalouge.push(obj);
}

function removeFromCatalouge(title, author, pages) {
	var found = false;
	var x = 0;
	while (found == false) {
		for (let i = 0; i < bookCatalouge.length - 1; i++) {
			if (bookCatalouge[i].getTitle() == title && bookCatalouge[i].getAuthor() == author && bookCatalouge[i].getPageCount() == pages) {	
			bookCatalouge.splice(i, 1);
			console.log('Book removed from catalouge');
			console.log(' ');
			found = true;
			break;
			} 
		}
		if (found == false) {
		console.log('Book is not currently in catalouge.');
		console.log(' ');
		} 
}

//function removeFromCatalouge(title, author, pages) {
//	var found = false;
//	var x = 0;
//	while (found == false || x < bookCatalouge.length - 1) {
//		if (bookCatalouge[x].getTitle() == title && bookCatalouge[x].getAuthor() == author && bookCatalouge[x].getPageCount() == pages) {	
//			bookCatalouge.splice(x, 1);
//			console.log('Book removed from catalouge');
//			console.log(' ');
//			found = true;
//			break;
//		} else {
//			x = x + 1;
//		}
//	}
//	if (found == false) {
//		console.log('Book is not currently in catalouge.');
//		console.log(' ');
//	} 
//}

//function isInCatalouge(title, author, pages) {
//	var found = false;
//	var x = 0;
//	while (found == false || x < bookCatalouge.length - 1) {
//		if (bookCatalouge[x].getTitle() == title && bookCatalouge[x].getAuthor() == author && bookCatalouge[x].getPageCount() == pages) {	
//			console.log('The book is in the catalouge');
//			console.log(' ');
//			found = true;
//			break;
//		} else {
//			x = x + 1;
//		}
//	}
//	if (found == false) {
//		console.log('Book is not currently in catalouge.');
//		console.log(' ');
//	} 
//}

function showCatalouge() {
	for (var i  = 0; i <= bookCatalouge.length - 1; i++) {
		bookCatalouge[i].getTitleShow();
		bookCatalouge[i].getAuthorShow();
		bookCatalouge[i].getPageCountShow();
		console.log("-----------------------------------------------------------");
	}
}

let bookCatalouge = [];

let book1 = new Book('Pastoralia', 'George Saunders', 188);
let book2 = new Book('As I Lay Dying', 'William Faulkner', 267);
let book3 = new Book('Double Triple', 'The Double Triple Boys', 222);

addToCatalouge(book1);
addToCatalouge(book2);

//showCatalouge();

//isInCatalouge('Double Triple', 'The Double Triple Boys', 424);
//isInCatalouge('As I Lay Dying', 'William Faulkner', 267);
//removeFromCatalouge(book2.getTitle(), book2.getAuthor(), book2.getPageCount());
removeFromCatalouge('Double Triple', 'The Double Triple Boys', 424);


showCatalouge();