using System;
using System.Security.Cryptography;
using System.Text;

public static class PasswordHasher
{
    public static string HashPassword(string password)
    {
        using (var sha256 = SHA256.Create())
        {
            // Convert the password to bytes
            var bytes = Encoding.UTF8.GetBytes(password);
            // Compute the hash
            var hash = sha256.ComputeHash(bytes);
            // Convert the hash to a Base64 string
            return Convert.ToBase64String(hash);
        }
    }
}
