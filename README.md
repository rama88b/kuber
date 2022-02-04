# nodejs-cloudbuild-kubernetes

First configure Ingress Nginx
https://kubernetes.github.io/ingress-nginx/deploy/

Install Cert Manager
https://docs.cert-manager.io/en/venafi/tutorials/acme/http-validation.html

Apply first `letsencrypt-staging.yml`

Update the domain to listen to the cluster ip

`$ kubectl get services --all-namespaces`

Apply the `certificate.yml`

Uncomment the non tls version in `deployment.yml`

Look at the status:

`$ kubectl describe certificate.certmanager.k8s.io/kubernetes-cloudnative-dk`

Enable the tls certificate in `deployment.yml`

HTTPS works!
