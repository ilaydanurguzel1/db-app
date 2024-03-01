Kurulum aşamasında yapılması gerekenler:
    1. Terminal veya komut işlemcisini açın.
    2. 'npm install' komutunu çalıştırarak bağlımlılıkları yükleyin.
    3. MySql veritabanı sunucunusu çalıştırın ve gerekli vertabanı oluşturma işlemlerini gerçekleştirin.
    4. 'helper/mysql.js dosyasındaki veritabanı bağlantı bilgilerini kendi ortamınıza uygun şekilde güncelleyin.

Kullanım:
    1. 'POST /students' endpoint'i, yeni bir öğrenci eklemek için kullanılır. Öğrenci adı, vize ve final notu JSON formatında istek gövdesi olarak gönderilmelidir.
    2. 'GET /students' endpoint'i, tüm öğrenci kayıtlarını almak için kullanılır. Öğrenci kayıtları JSON formatında yanıt olarak döner.
    3. 'GET /students/:id' endpoint'i, belirli bir öğrencinin bilgilerini almak için kullanılır. Öğrenci kimliği (id) belirtilmelidir. Öğrenci bilgileri ve ortalama notu JSON formatında bir yanıt olarak döner.

Çalıştırma:
    1. Terminal veya komut istemcisinde projenin ana dizinine gidin.
    2.'node app.js' komutunu çalıştırarak sunucuyu başlatın.