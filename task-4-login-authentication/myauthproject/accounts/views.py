from django.shortcuts import render, redirect
from django.contrib.auth import login, logout
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.decorators import login_required

# Create your views here.
def register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('dashboard')
    else:
        form = UserCreationForm()
    return render(request, 'accounts/register.html', {'form': form})
            

def login(request):
    if request == 'POST':
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            user = form.get_save()
            login(request, user)
            return redirect('dashboard')
    else:
        form = AuthenticationForm()
    return render(request,'accounts/login.html', {'form': form})


def logout(request):
    if request == 'POST':
        logout(request)
    return redirect('login')

@login_required
def dashboard(request):
    return render(request,'accounts/dashboard.html')