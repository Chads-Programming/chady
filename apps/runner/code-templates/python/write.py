import time

def write(sol_func, args):
    start_time = time.time()
    result = sol_func(args)
    elapsed_time = (time.time() - start_time)* 1000
    print(f't: {elapsed_time:.4f}', result, sep="\n")
