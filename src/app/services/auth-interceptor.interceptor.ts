import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authInterceptorInterceptor: HttpInterceptorFn = (request, next) => {
  const router = inject(Router);

  const token = localStorage.getItem('token');
      if(token) {
        request = request.clone({
          setHeaders: { Authorization: `Token ${token}`}
        })
      }

      return next(request).pipe(
        catchError((err) => {
          if(err instanceof HttpErrorResponse) {
            if(err.status === 401) { // 401 = not authorized
              //router.navigateByUrl('/login');
              console.log('No Token');
            }
          }
          return throwError(() => err)
        })
      )
};
