# kili-A-a-taki-yi-D-mleri-Sayma
Bu fonksiyon, bir ikili ağaçtaki iyi düğümleri saymak için özyinelemeli bir algoritma kullanır. Bir düğümün iyi olup olmadığını belirlemek için, düğümün değerinin daha önce ziyaret edilen en büyük değerden büyük veya eşit olup olmadığı kontrol edilir. Eğer öyleyse, düğüm iyi olarak kabul edilir ve count adlı değişken artırılır.

Özyinelemeli traverse fonksiyonu, her düğümün sol ve sağ alt ağaçlarını sırayla ziyaret eder. İlk olarak root düğümünden başlar ve her alt ağacı tekrar traverse fonksiyonunu özyinelemeli olarak çağırarak ziyaret eder.

Fonksiyon, her çağrıda node adlı bir düğüm ve max adlı bir değer alır. node düğümünün değeri, max değerinden büyük veya eşitse, node düğümü iyi olarak kabul edilir ve count artırılır. Ayrıca, max değeri, node düğümünün değerinden büyükse, max değeri node düğümünün değeriyle güncellenir.

Fonksiyon, sonunda count değişkenini döndürür, bu da iyi düğümlerin sayısını temsil eder.

Bu fonksiyon, özyinelemeli bir algoritma kullandığı için, ağacın her düğümünü ziyaret etmek için O(n) zaman karmaşıklığına sahiptir, burada n ağaçtaki düğüm sayısını temsil eder. Ayrıca, fonksiyon, her bir çağrıda yalnızca sabit miktarda bellek kullanır, bu nedenle ağacın derinliği kadar bellek kullanımı artmaz.
