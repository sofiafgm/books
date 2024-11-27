import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="container-fluid bg-dark min-vh-100 py-5">
      <div class="container">
        <div class="text-center">
          <h1 class="display-4 text-light fw-bold mb-4">Enlaces a servicios en la nube</h1>
          
          <div class="container mt-5">
    <div class="row text-center">
        <div class="col-md-3 mb-4">
            <div class="card shadow-sm">
                <img src="https://www.svgrepo.com/show/353805/google-cloud.svg" class="card-img-top" alt="Google Cloud">
                <div class="card-body">
                    <h5 class="card-title">Google Cloud</h5>
                    <p class="card-text">Accede a Google Cloud para soluciones de computación, almacenamiento y redes.</p>
                    <a href="https://cloud.google.com" class="btn btn-dark" target="_blank">Visitar Google Cloud</a>
                </div>
            </div>
        </div>
        
        <div class="col-md-3 mb-4">
            <div class="card shadow-sm">
                <img src="https://www.svgrepo.com/show/313522/aws.svg" class="card-img-top" alt="AWS">
                <div class="card-body">
                    <h5 class="card-title">AWS</h5>
                    <p class="card-text">Amazon Web Services para soluciones escalables de computación en la nube.</p>
                    <a href="https://aws.amazon.com" class="btn btn-dark" target="_blank">Visitar AWS</a>
                </div>
            </div>
        </div>

        <div class="col-md-3 mb-4">
            <div class="card shadow-sm">
                <img src="https://www.svgrepo.com/show/331302/azure-v2.svg" class="card-img-top" alt="Microsoft Azure">
                <div class="card-body">
                    <h5 class="card-title">Microsoft Azure</h5>
                    <p class="card-text">Explora Azure para servicios de computación en la nube, IA y datos.</p>
                    <a href="https://azure.microsoft.com" class="btn btn-dark" target="_blank">Visitar Microsoft Azure</a>
                </div>
            </div>
        </div>

        <div class="col-md-3 mb-4">
            <div class="card shadow-sm">
                <img src="https://www.svgrepo.com/show/340422/ibm-cloud.svg" class="card-img-top" alt="IBM Cloud">
                <div class="card-body">
                    <h5 class="card-title">IBM Cloud</h5>
                    <p class="card-text">IBM Cloud proporciona infraestructura, IA y servicios de datos.</p>
                    <a href="https://www.ibm.com/cloud" class="btn btn-dark" target="_blank">Visitar IBM Cloud</a>
                </div>
            </div>
        </div>

        <button class="btn-light btn-md" routerLink="/books">
          Ir al catalogo
        </button>
    </div>
</div>
          
        </div>
      </div>
    </div>
  `
})
export class HomeComponent {} 