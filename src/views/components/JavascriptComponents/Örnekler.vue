<template>
    <div>

        <h3 class="h4 text-success font-weight-bold mt-md">Günün Kod Örneği</h3>
        <div class="row py-3 align-items-center">
            <div class="col-sm-3">
                <small class="text-uppercase text-muted font-weight-bold">Günün Java Kod Örneği</small>
            </div>
            <div class="col-sm-9">
                <h3 class="heading mb-0">public class Toplam{ <Br> </Br>
                    public static void main(String args[])<Br> </Br>
                    {<Br> </Br>
                    int randomSayi = (int)(Math.random()*(1000)); //0 ile 1000 arasında sayı<Br> </Br>
                    System.out.println("random sayi " + randomSayi); //üretilen sayıyı konsola bastırdık<Br> </Br>

                    int birler = randomSayi %10; //birler basamağı<Br> </Br>

                           randomSayi = randomSayi /10;<Br> </Br>
                           int onlar = randomSayi %10;   //onlar basamağı<Br> </Br>

                           int yuzler = randomSayi /10;  //yüzler basamağı<Br> </Br>

                            System.out.println("Toplamları ="+(birler+onlar+yuzler));
                    <Br> </Br>

                    }<Br> </Br>
                    }</h3>
            </div>
        </div>
        <div class="row py-3 align-items-center">
            <div class="col-sm-3">
                <small class="text-uppercase text-muted font-weight-bold">Deneme...</small>
            </div>
            <div class="col-sm-9">
                <h3 class="heading-title text-warning mb-0">Deneme</h3>
            </div>
        </div>
        <div class="row py-3 align-items-center">
            <div class="col-sm-3">
                <small class="text-uppercase text-muted font-weight-bold">Denemee</small>
            </div>
            <div class="col-sm-9">
                <div>
                    <h2 class="display-3">Denemee </h2>
                    <p class="lead text-muted">Denemee</p>
                </div>
            </div>
        </div>
        <!-- Paragraphs -->
        <h3 class="h4 text-success font-weight-bold mt-md">Denemee</h3>
        <div class="row py-3 align-items-center">
            <div class="col-sm-3">
                <small class="text-uppercase text-muted font-weight-bold">Denemee</small>
            </div>
            <div class="col-sm-9">
                <p>Denemee</p>
            </div>
        </div>

        <div class="row py-3 align-items-center">
            <div class="col-sm-3">
                <small class="text-uppercase text-muted font-weight-bold">Denemee</small>
            </div>
            <div class="col-sm-9">
                <blockquote class="blockquote">
                    <p class="mb-0">Denemee</p>
                    <footer class="blockquote-footer">Denemee
                        <cite title="Source Title">Denemee</cite>
                    </footer>
                </blockquote>
            </div>
        </div>
        <div class="row py-3 align-items-center">
            <div class="col-sm-3">
                <small class="text-uppercase text-muted font-weight-bold">Denemee</small>
            </div>
            <div class="col-sm-9">
                <p class="text-muted mb-0">Denemee</p>
            </div>
        </div>
        <div class="row py-3 align-items-center">
            <div class="col-sm-3">
                <small class="text-uppercase text-muted font-weight-bold">Primary text</small>
            </div>
            <div class="col-sm-9">
                <p class="text-primary">Denemee</p>
            </div>
        </div>
        <div class="row py-3 align-items-center">
            <div class="col-sm-3">
                <small class="text-uppercase text-muted font-weight-bold">Denemee</small>
            </div>
            <div class="col-sm-9">
                <p class="text-info mb-0">Denemee</p>
            </div>
        </div>
        <div class="row py-3 align-items-center">
            <div class="col-sm-3">
                <small class="text-uppercase text-muted font-weight-bold">Denemee</small>
            </div>
            <div class="col-sm-9">
                <p class="text-success mb-0">Denemee</p>
            </div>
        </div>
        <div class="row py-3 align-items-center">
            <div class="col-sm-3">
                <small class="text-uppercase text-muted font-weight-bold">Denemee</small>
            </div>
            <div class="col-sm-9">
                <p class="text-warning mb-0">Denemee</p>
            </div>
        </div>
        <div class="row py-3 align-items-center">
            <div class="col-sm-3">
                <small class="text-uppercase text-muted font-weight-bold">Denemee</small>
            </div>
            <div class="col-sm-9">
                <p class="text-danger mb-0">Denemee</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style>
</style>
